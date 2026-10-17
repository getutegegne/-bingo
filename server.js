const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const TelegramBot = require('node-telegram-bot-api');

// ከ BotFather ያገኙትን ቶክን እዚህ ጋር ያስገቡ
const token = '8896941621:AAE3EaP75jKl2jF7DGIQR2J8Or7x_HncSUI ';
const bot = new TelegramBot(token, { polling: true });

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        bot.sendMessage(chatId, "እንኳን ወደ ጂቲ ቢንጎ (GT Bingo) በደህና መጡ! ጨዋታውን ለመጀመር ሊንኩን ይጫኑ።");
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
