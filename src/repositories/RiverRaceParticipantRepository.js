const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const RiverRaceParticipantRepository = {
	async createMany(participants) {

		await prisma.RiverRaceParticipant.createMany({
			data: participants
		});
	}
};

module.exports = RiverRaceParticipantRepository;