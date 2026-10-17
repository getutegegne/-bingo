const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// እዚህ ጋር የቴሌግራም ቦት ቶክንዎን ያስገቡ (በጥቅሻ ውስጥ)
const TOKEN = '8896941621:AAE3EaP75jKl2jF7DGIQR2J8Or7x_HncSUI ';
const bot = new TelegramBot(TOKEN, { polling: true });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// የዌብ አፕሊኬሽኑ መነሻ ገጽ
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// የቴሌግራም ቦት መልእክት መቀበያ
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "ሰላም! እንኳን ወደ ጂቲ ቢንጎ (GT Bingo) በሰላም መጡ!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
