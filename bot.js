const { Telegraf, Markup } = require('telegraf');

// የቦትዎ ቶከን (ከ BotFather ያገኙት)
const BOT_TOKEN = process.env.BOT_TOKEN || "YOUR_TELEGRAM_BOT_TOKEN_HERE";
// የእርስዎ (የአድሚኑ) ቴሌግራም ID ቁጥር
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID || "YOUR_ADMIN_CHAT_ID";

const bot = new Telegraf(BOT_TOKEN);

// /start ትዕዛዝ ሲላክ
bot.start((ctx) => {
  ctx.reply("👋 እንኳን ወደ GT Bingo Pro Bot በደህና መጡ!", Markup.keyboard([
    [Markup.button.webApp("🎮 ጨዋታ ጀምር (Play Bingo)", "https://your-render-url.onrender.com")]
  ]).resize());
});

// ተጠቃሚው ከሚኒ አፑ መረጃ (Web App Data) ሲልክ
bot.on('web_app_data', async (ctx) => {
  try {
    const data = JSON.parse(ctx.webAppData.data);
    const user = ctx.from;

    if (data.action === 'withdraw_request') {
      const msg = `🔔 *አዲስ የዊዝድሮ ጥያቄ!*\n\n` +
                  `👤 *ተጫዋች:* ${data.username} (@${user.username || 'N/A'})\n` +
                  `📱 *ስልክ:* ${data.phone || 'N/A'}\n` +
                  `💰 *መጠን:* ${data.amount} ETB\n` +
                  `🏦 *ባንክ:* ${data.bankType}\n` +
                  `💳 *አካውንት:* \`${data.accountNumber}\``;

      await bot.telegram.sendMessage(ADMIN_CHAT_ID, msg, {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard([
          [
            Markup.button.callback("✅ አረጋግጥ & ክፈል", `approve_wd_${user.id}_${data.amount}`),
            Markup.button.callback("❌ ሰርዝ", `reject_wd_${user.id}`)
          ]
        ])
      });

      await ctx.reply("✓ የዊዝድሮ ጥያቄዎ ለአድሚን ተልኳል! አድሚኑ አረጋግጦ ብሩን ይልካል።");

    } else if (data.action === 'deposit_request') {
      const msg = `📥 *አዲስ የዲፖዚት (SMS) ጥያቄ!*\n\n` +
                  `👤 *ተጫዋች:* ${data.username} (@${user.username || 'N/A'})\n` +
                  `💰 *የተጠየቀ መጠን:* ${data.amount} ETB\n` +
                  `🔑 *Txn ID:* \`${data.transactionId}\` \n\n` +
                  `📄 *የተላከው SMS:*\n_${data.rawSms}_`;

      await bot.telegram.sendMessage(ADMIN_CHAT_ID, msg, {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard([
          [
            Markup.button.callback("✅ ባላንስ ሙላ (Approve)", `approve_dep_${user.id}_${data.amount}`),
            Markup.button.callback("❌ የሐሰት SMS (Reject)", `reject_dep_${user.id}`)
          ]
        ])
      });

      await ctx.reply("✓ የዲፖዚት SMS ጥያቄዎ ለአድሚን ተልኳል! አድሚኑ አረጋግጦ ባላንስዎን ይሞላል።");
    }
  } catch (err) {
    console.error("Data error:", err);
  }
});

// አድሚኑ አዝራር ሲጫን (Action handlers)
bot.action(/approve_wd_(.+)_(.+)/, async (ctx) => {
  const userId = ctx.match[1];
  const amount = ctx.match[2];
  
  await ctx.answerCbQuery("ክፍያው ተረጋገጠ!");
  await ctx.editMessageText(ctx.callbackQuery.message.text + "\n\n✅ *ሁኔታ:* አድሚኑ ክፍያውን አጽድቆታል!", { parse_mode: 'Markdown' });
  
  // ለተጠቃሚው ማሳወቂያ መላክ
  try {
    await bot.telegram.sendMessage(userId, `🎉 የ ${amount} ETB ዊዝድሮ ጥያቄዎ ጸድቆ ብሩ ወደ አካውንትዎ ተልኳል!`);
  } catch (e) {}
});

bot.action(/reject_wd_(.+)/, async (ctx) => {
  const userId = ctx.match[1];
  await ctx.answerCbQuery("ጥያቄው ተሰርዟል");
  await ctx.editMessageText(ctx.callbackQuery.message.text + "\n\n❌ *ሁኔታ:* ጥያቄው ተሰርዟል!", { parse_mode: 'Markdown' });

  try {
    await bot.telegram.sendMessage(userId, `❌ የዊዝድሮ ጥያቄዎ ውድቅ ተደርጓል። እባክዎን አድሚኑን ያናግሩ።`);
  } catch (e) {}
});

bot.launch();
console.log("Bot server running...");
