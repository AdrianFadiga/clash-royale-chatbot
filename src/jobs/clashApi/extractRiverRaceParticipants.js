const { RiverRaceParticipantService } = require("../../services");

async function extractRiverRaceParticipants() {
	console.log("Salvando os dados da guerra...............");
	await RiverRaceParticipantService.createMany();
}

module.exports = extractRiverRaceParticipants;