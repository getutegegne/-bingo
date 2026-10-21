const { Telegraf, Markup } = require('telegraf');
const http = require('http');

// Render Environment Variables
const BOT_TOKEN = process.env.BOT_TOKEN || '8896941621:AAFXWJi6n7IRAH28yrJj6N7Poee4NJy8rzs'; 
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID || '7216374584'; 

// Render ላይ ያለው የጨዋታው የቀጥታ (Live) ሊንክ
const GAME_WEBAPP_URL = 'https://gt-bingo-pro-pro.onrender.com'; 

const bot = new Telegraf(BOT_TOKEN);

// ተጠቃሚው /start ሲል የሚመጣው ዋና ሜኑ
bot.start((ctx) => {
    ctx.reply(
        'ሰላም! እንኳን ወደ ቢንጎ ጨዋታ በደህና መጡ! 🎲\n\nከታች ያለውን ቁልፍ ተጭነው ጨዋታውን መጀመር ይችላሉ፦',
        Markup.keyboard([
            [Markup.button.webApp('🎮 ጨዋታውን ጀምር', GAME_WEBAPP_URL)],
            ['💰 የሂሳብ መጠን (Balance)', '📥 ገንዘብ ያስገቡ (Deposit)'],
            ['📤 ገንዘብ ያውጡ (Withdraw)', '📞 የእርዳታ መስመር (Support)']
        ]).resize()
    );
});

// የጽሁፍ ቁልፎች ሲነኩ የሚሰጡ ምላሾች
bot.hears('💰 የሂሳብ መጠን (Balance)', (ctx) => {
    ctx.reply('💳 የሂሳብዎ መጠን፦ 0.00 ETB');
});

bot.hears('📥 ገንዘብ ያስገቡ (Deposit)', (ctx) => {
    ctx.reply('📥 ገንዘብ ለማስገባት በቴሌብር ወይም በባንክ ይላኩ፦\n\n📱 ቴሌብር: 0912345678\n🏦 CBE: 1000123456789\n\nገንዘቡን ከላኩ በኋላ ደረሰኙን ለአድሚን ይላኩ።');
});

bot.hears('📤 ገንዘብ ያውጡ (Withdraw)', (ctx) => {
    ctx.reply('📤 ገንዘብ ለማውጣት እባክዎን በጨዋታው ውስጥ ባለው የገንዘብ ማውጫ ቅጽ ይጠቀሙ።');
});

bot.hears('📞 የእርዳታ መስመር (Support)', (ctx) => {
    ctx.reply('📞 ለአስተያየት እና ለችግሮች እባክዎን አድሚኑን ያናግሩ።');
});

// የገንዘብ ማውጣት ጥያቄ ከጨዋታው ሲመጣ
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
            ctx.reply('ጥያቄዎ ለአድሚን ተልኳል።');
        }
    } catch (e) {
        console.error('Error:', e);
    }
});

// የአድሚን ማጽደቂያ አዝራሮች
bot.action(/approve_(.+)_(.+)/, (ctx) => {
    ctx.answerCbQuery('ተጸድቋል!');
    ctx.editMessageText('✅ የገንዘብ ማውጣት ጥያቄው ተጸድቋል!');
});

bot.action(/cancel_(.+)_(.+)/, (ctx) => {
    ctx.answerCbQuery('ተሰርዟል!');
    ctx.editMessageText('❌ የገንዘብ ማውጣት ጥያቄው ተሰርዟል!');
});

// Render Web Service እንዳይዘጋ የሚያደርግ Dummy HTTP Server
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bingo Bot and WebApp are Running Live!\n');
}).listen(PORT, () => {
    console.log(`🌐 Web server running on port ${PORT}`);
});

bot.launch().then(() => console.log('🤖 ቦቱ ከአዝራሮች ጋር በስኬት ተጀምሯል...'));
