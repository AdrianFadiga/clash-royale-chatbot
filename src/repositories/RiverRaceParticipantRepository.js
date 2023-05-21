const { PrismaClient } = require("@prisma/client");
const { getLastDays } = require("../helpers");

const prisma = new PrismaClient();

const RiverRaceParticipantRepository = {
	async createMany(participants) {
		await prisma.RiverRaceParticipant.createMany({
			data: participants
		});
	},

	async lastWarReport(playersTags) {
		const {today, lastDaysAgo} = getLastDays(5);
		return prisma.RiverRaceParticipant.groupBy({
			by: ["tag", "name"],
			where: {
				AND: {
					tag: {
						in: playersTags
					},
					dateRef: {
						gte: lastDaysAgo,
						lte: today 
					}
				}
			},
			_sum: {
				missingAttacks: true
			},
			_max: {
				fame: true,
				decksUsed: true,
			},
		});
	}
};

module.exports = RiverRaceParticipantRepository;