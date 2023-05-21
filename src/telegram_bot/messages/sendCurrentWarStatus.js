const bot = require("../");
const { getCurrentWarStatus } = require("../../utils");
require("dotenv").config();


async function sendCurrentWarStatusMessage() {
	const message = await getCurrentWarStatus();
	bot.sendMessage(process.env.CHANNEL_ID, JSON.stringify(message, null, 2));
}

module.exports = sendCurrentWarStatusMessage;

