const { Telegraf, Markup } = require('telegraf');

// እዚህ ጋር ከ BotFather ያገኙትን የቦት ቶከን ያስገቡ
const bot = new Telegraf('YOUR_BOT_TOKEN_HERE');

// የአስተዳዳሪዎ የቴሌግራም ቻት ID (Admin Chat ID) እዚህ ይጻፍ
const ADMIN_CHAT_ID = '123456789'; 

// ተጠቃሚው ዌብ አፕ ላይ ዊዝድሮ ሲጠይቅ ይህ ትዕዛዝ መረጃውን ይቀበላል
bot.action('withdraw_request', async (ctx) => {
    // ከዌብ አፑ የመጣው መረጃ (ምሳሌ ያህል)
    const data = ctx.callbackQuery.data;
    
    // ለአስተዳዳሪው ኖቲፊኬሽን መላክ
    await bot.telegram.sendMessage(ADMIN_CHAT_ID, 
        `🚨 **አዲስ የገንዘብ ማውጫ ጥያቄ!**\n\n` +
        `👤 ስም: ጌቱ\n` +
        `🏦 ባንክ: ቴሌብር\n` +
        `📱 አካውንት: 0937565994\n` +
        `💰 የሚወጣው ብር: 200 ETB`,
        {
            parse_mode: 'Markdown',
            ...Markup.inlineKeyboard([
                [Markup.button.callback('✅ ልኬአለሁ (Confirm)', 'confirm_withdraw')],
                [Markup.button.callback('❌ ሰርዝ (Cancel)', 'cancel_withdraw')]
            ])
        }
    );
});

// አስተዳዳሪው "Confirm" ሲለው
bot.action('confirm_withdraw', async (ctx) => {
    await ctx.editMessageText('✅ የገንዘብ ማውጫ ጥያቄው ጸድቆ ተጠቃሚው ተገልጾአል!');
    
    // (አማራጭ) ወደ ተጠቃሚው ቦት ሄዶ መልእክት መላክ ይቻላል
    // await bot.telegram.sendMessage(user_chat_id, "🎉 የገንዘብ ማውጫ ጥያቄዎ ጸድቆ ገንዘቡ ወደ አካውንትዎ ተልኳል!");
});

// አስተዳዳሪው "Cancel" ሲለው
bot.action('cancel_withdraw', async (ctx) => {
    await ctx.editMessageText('❌ የገንዘብ ማውጫ ጥያቄው ተሰርዟል።');
});

bot.launch();
console.log('🤖 የአስተዳዳሪው ቦት በስኬት ተጀምሯል...');
