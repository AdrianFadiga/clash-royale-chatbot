const { ChatbotService } = require("../../services");


async function sendCurrentWarStatusMessageJob() {
	console.log("Enviando Status da Guerra no Telegram...............");
	await ChatbotService.sendCurrentWarStatusMessage();
}

module.exports = sendCurrentWarStatusMessageJob;