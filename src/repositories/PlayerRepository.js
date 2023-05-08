const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const PlayerRepository = {
	async getAllTags() {
		return prisma.Player.findMany({
			select: {
				tag: true
			}
		});
	},

	async updateClanMembers(players) {
		await prisma.$queryRaw`TRUNCATE TABLE Players`;

		const createdPlayers = await prisma.Player.createMany({data: players});
		return createdPlayers;
	}
};

module.exports = PlayerRepository;