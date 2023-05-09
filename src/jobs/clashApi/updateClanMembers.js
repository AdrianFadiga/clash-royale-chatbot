const { PlayerService } = require("../../services");

async function updateClanMembers() {
	console.log("Atualizando os membros do clan.......");
	await PlayerService.updateClanMembers();
}

module.exports = updateClanMembers;