const telegramBot = require("node-telegram-bot-api");
const TOKEN = process.env.TELEGRAM_TOKEN;
const bot = new telegramBot(TOKEN, {polling: true});
require("dotenv").config();

module.exports = bot;