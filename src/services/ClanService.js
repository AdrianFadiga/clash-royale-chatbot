const { getClanMembers, getCurrentRiverRace } = require("../requests");

const ClanService = {
	async currentWarStatus(clanId, Authorization) {
		const clanMembers = await getClanMembers(`%23${clanId}`, Authorization);
    
		const clanMembersNames = clanMembers.map(({name}) => name);

		const currentRiverRace = await getCurrentRiverRace(`%23${clanId}`, Authorization);

		const missingAttacks = currentRiverRace.reduce((acc, curr) => {
			if (clanMembersNames.includes(curr.name) && curr.decksUsedToday < 4) {
				acc.push({name: curr.name, missingBattles: (4 - curr.decksUsedToday)});
				return acc;
			}
			return acc;
		}, []);

		const response = {
			missingPlayersCount: missingAttacks.length,
			missingBattlesCount: missingAttacks.reduce((acc, curr) => acc += curr.missingBattles, 0),
			players: missingAttacks
		};

		return response;
	}
};

module.exports = {ClanService};