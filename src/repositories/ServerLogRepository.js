const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ServerLogRepository = {
	async create() {
		await prisma.ServerLog.create({data: {}});
	}
};

module.exports = ServerLogRepository;