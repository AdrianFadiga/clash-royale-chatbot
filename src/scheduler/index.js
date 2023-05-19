const cron = require("node-cron");
const { 
	extractRiverRaceParticipants, 
	updateClanMembers, 
	serverLogJob, 
	sendCurrentWarStatusMessageJob } = require("../jobs");

function scheduler() {
	// Atualiza a table river_race_participants com as informações do dia
	cron.schedule("0 6 * * 4-1", () => {
		extractRiverRaceParticipants();
	});

	// Atualiza a table players com os players no clã
	cron.schedule("30 5 * * 4-1", () => {
		updateClanMembers();
	});

	// Cria log do horário atual no BD
	cron.schedule("30 * * * *", () => {
		serverLogJob();
	});
	
	// Manda mensagem via telegram do status da guerra
	cron.schedule("0 16-23,0-6 * * 4-1", () => {
		sendCurrentWarStatusMessageJob();
	});
}

module.exports = scheduler;