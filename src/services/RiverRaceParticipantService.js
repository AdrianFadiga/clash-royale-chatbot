const { generateDateRef } = require("../helpers");
const { RiverRaceParticipantRepository } = require("../repositories");
const { royaleApi } = require("../requests");
const PlayerService = require("./PlayerService");

const RiverRaceParticipantService = {
	async createMany() {
		const currentRiverRace = await royaleApi.getCurrentRiverRace();

		const serializedParticipants = await serialize(currentRiverRace);

		await RiverRaceParticipantRepository.createMany(serializedParticipants);
	}
};

async function serialize(currentRiverRace) {
	const clanMembersTags = await PlayerService.getAllTags();
	
	return currentRiverRace.participants.map(({tag, name, fame, decksUsed, decksUsedToday }) => ({
		tag, name, fame, decksUsed, decksUsedToday,
		clanTag: currentRiverRace.tag,
		missingAttacks: 4 - decksUsedToday,
		isInClan: clanMembersTags.includes(tag),
		dateRef: generateDateRef()
	}));
}

module.exports = RiverRaceParticipantService;