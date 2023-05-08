const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const RiverRaceParticipantRepository = {
	async upsertMany(participants) {

		participants.forEach(async (participant) => {
			await prisma.RiverRaceParticipant.upsert({
				where: {
					tag: participant.tag
				},
				update: {...participant, 
					updatedAt: new Date(),
				},
				create: {...participant},
			});
		});
	}
};

module.exports = RiverRaceParticipantRepository;