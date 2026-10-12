require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

// Включаем бота без всяких прокси, так как работает Режим TUN
const bot = new TelegramBot(token, { 
  polling: {
    interval: 2000,
    autoStart: true
  }
});

console.log('Бот запускается, ждем связи с сервером...');

bot.onText(/\/start/, (msg) => {
  console.log('Ура! Бот увидел команду /start от пользователя');
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я бот для рецептов. Я жив и работаю!');
});

bot.on('polling_error', (error) => {
  console.log('ОШИБКА СВЯЗИ:', error.message);
});