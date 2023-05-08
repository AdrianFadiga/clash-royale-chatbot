const { RiverRaceParticipantRepository } = require("../repositories");
const { PlayerService } = require("./PlayerService");
const { royaleApi } = require("../requests");

const RiverRaceParticipantService = {
	async updateParticipants() {
		const currentRiverRace = await royaleApi.getCurrentRiverRace();

		const serializedParticipants = await serialize(currentRiverRace);

		await RiverRaceParticipantRepository.upsertMany(serializedParticipants);
	}
};

async function serialize(currentRiverRace) {
	const clanMembersTags = await PlayerService.getAllTags();
	
	return currentRiverRace.participants.map(({tag, name, fame, decksUsed, decksUsedToday }) => ({
		tag, name, fame, decksUsed, decksUsedToday,
		clanTag: currentRiverRace.tag,
		missingAttacks: 4 - decksUsedToday,
		isInClan: clanMembersTags.includes(tag),
	}));
}

RiverRaceParticipantService.updateParticipants();

module.exports = {RiverRaceParticipantService};