const { royaleApi } = require("../requests");

const ClanService = {
	async currentWarStatus() {
		const clanMembers = await royaleApi.getClanInfo();

		// return clanMembers;
    
		const clanMembersNames = clanMembers.memberList.map(({name}) => name);

		const currentRiverRace = await royaleApi.getCurrentRiverRace();
		
		const missingAttacks = currentRiverRace.participants.reduce((acc, curr) => {
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