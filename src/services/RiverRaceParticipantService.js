const { RiverRaceParticipantRepository } = require("../repositories");
const { royaleApi } = require("../requests");

const RiverRaceParticipantService = {
	async createMany() {
		const currentRiverRace = await royaleApi.getCurrentRiverRace();

		const serializedParticipants = await serialize(currentRiverRace);

		await RiverRaceParticipantRepository.createMany(serializedParticipants);
	}
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