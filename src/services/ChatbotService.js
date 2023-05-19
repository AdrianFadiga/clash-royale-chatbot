const bot = require("../telegram_bot");
const { getCurrentWarStatus } = require("../utils");
require("dotenv").config();

const ChatbotService = {
	async sendCurrentWarStatusMessage() {
		const message = await getCurrentWarStatus();
		bot.sendMessage(process.env.CHANNEL_ID, JSON.stringify(message, null, 2));
	}
};

module.exports = ChatbotService;

