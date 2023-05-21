const {sendCurrentWarStatusMessage} = require("../../telegram_bot/messages");

async function sendCurrentWarStatusMessageJob() {
	console.log("Enviando Status da Guerra no Telegram...............");
	await sendCurrentWarStatusMessage();
}

module.exports = sendCurrentWarStatusMessageJob;