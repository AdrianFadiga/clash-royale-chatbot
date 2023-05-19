const { ServerLogRepository } = require("../repositories");


async function serverLogJob() {
	console.log("Criando Log no BD...............");
	await ServerLogRepository.create();
}

module.exports = serverLogJob;