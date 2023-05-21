const cron = require("node-cron");
const { sendCurrentWarStatusMessageJob } = require("../jobs");

function chatbotScheduler() {
	// Atualiza a table river_race_participants com as informações do dia
	console.log("Inicializando os schedulers do chatBot.........");
	
	// Manda mensagem via telegram do status da guerra
	cron.schedule("0 16-23,0-6 * * 4,5,6,7,1", () => {
		sendCurrentWarStatusMessageJob();
	});
}

module.exports = chatbotScheduler;