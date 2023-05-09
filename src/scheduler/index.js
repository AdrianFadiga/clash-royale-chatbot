const cron = require("node-cron");
const { extractRiverRaceParticipants, updateClanMembers } = require("../jobs");

function scheduler() {
	// Atualiza a table river_race_participants com as informações do dia
	cron.schedule("0 3 * * *", () => {
		extractRiverRaceParticipants();
	});

	// Atualiza a table players com os players no clã
	cron.schedule("30 2 * * *", () => {
		updateClanMembers();
	});

}

module.exports = scheduler;