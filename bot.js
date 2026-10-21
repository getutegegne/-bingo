const { Telegraf, Markup } = require('telegraf');

// Render Environment Variables ይጠቀማል
const BOT_TOKEN = process.env.BOT_TOKEN || '8896941621:AAFXWJi6n7IRAH28yrJj6N7Poee4NJy8rzs'; 
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID || '7216374584'; 

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('ሰላም! ይህ የ ቢንጎ ጨዋታ የአስተዳዳሪ ቦት ነው።');
});

bot.on('web_app_data', async (ctx) => {
    try {
        const data = JSON.parse(ctx.webAppData.data);
        if (data.type === 'WITHDRAW_REQUEST') {
            const message = `⚠️ አዲስ የገንዘብ ማውጣት ጥያቄ!\n\nስም: ${data.name}\nስልክ: ${data.phone}\nመጠን: ${data.amount} ETB\nUser ID: ${data.userId}`;

            await ctx.telegram.sendMessage(ADMIN_CHAT_ID, message, {
                ...Markup.inlineKeyboard([
                    [
                        Markup.button.callback('✅ አጽድቅ', `approve_${data.userId}_${data.amount}`),
                        Markup.button.callback('❌ ሰርዝ', `cancel_${data.userId}_${data.amount}`)
                    ]
                ])
            });
            ctx.reply('ጥያቄዎ ተልኳል።');
        }
    } catch (e) {
        console.error('Error:', e);
    }
});

bot.action(/approve_(.+)_(.+)/, (ctx) => {
    ctx.answerCbQuery('ተጸድቋል!');
    ctx.editMessageText('✅ የገንዘብ ማውጣት ጥያቄው ተጸድቋል!');
});

bot.action(/cancel_(.+)_(.+)/, (ctx) => {
    ctx.answerCbQuery('ተሰርዟል!');
    ctx.editMessageText('❌ የገንዘብ ማውጣት ጥያቄው ተሰርዟል!');
});

bot.launch().then(() => console.log('🤖 ቦቱ በስኬት ተጀምሯል...'));
