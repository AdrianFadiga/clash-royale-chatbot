const { RiverRaceParticipantRepository } = require("../repositories");
const { royaleApi } = require("../requests");
const PlayerService = require("./PlayerService");

const RiverRaceParticipantService = {
	async createMany() {
		const currentRiverRace = await royaleApi.getCurrentRiverRace();

		const serializedParticipants = await serialize(currentRiverRace);

		await RiverRaceParticipantRepository.createMany(serializedParticipants);
	},

	async lastWarReport() {
		const playersTags = await PlayerService.getAllTags();
		const lastWarReport = await RiverRaceParticipantRepository.lastWarReport(playersTags);
		return lastWarReport.map(({name, tag, _sum: {missingAttacks}, _max: {fame, decksUsed}}) => ({name, tag, missingAttacks, fame, decksUsed}));},
};

async function serialize(currentRiverRace) {
	const dateRef = new Date();
	dateRef.setDate(dateRef.getDate() - 1);

	return currentRiverRace.participants.map(({tag, name, fame, decksUsed, decksUsedToday }) => ({
		tag, name, fame, decksUsed, decksUsedToday,
		clanTag: currentRiverRace.tag,
		missingAttacks: 4 - decksUsedToday,
		dateRef,
	}));
}

module.exports = RiverRaceParticipantService;