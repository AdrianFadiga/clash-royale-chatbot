const cron = require("node-cron");
const { 
	extractRiverRaceParticipants, 
	updateClanMembers, 
	serverLogJob 
} = require("../jobs");

function coreScheduler() {
	// Atualiza a table river_race_participants com as informações do dia
	console.log("Inicializando os schedulers do core da aplicação.........");
	cron.schedule("0 6 * * 4,5,6,7,1", () => {
		extractRiverRaceParticipants();
	});

	// Atualiza a table players com os players no clã
	cron.schedule("30 5 * * 4,5,6,7,1", () => {
		updateClanMembers();
	});

	// Cria log do horário atual no BD
	cron.schedule("0,30 * * * *", () => {
		serverLogJob();
	});
}

module.exports = coreScheduler;