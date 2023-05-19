const cron = require("node-cron");
const { extractRiverRaceParticipants, updateClanMembers, serverLogJob } = require("../jobs");

function scheduler() {
	// Atualiza a table river_race_participants com as informações do dia
	cron.schedule("0 6 * * *", () => {
		extractRiverRaceParticipants();
	});

	// Atualiza a table players com os players no clã
	cron.schedule("30 5 * * *", () => {
		updateClanMembers();
	});

	// Cria log do horário atual no BD
	cron.schedule("30 * * * *", () => {
		serverLogJob();
	});
}

module.exports = scheduler;