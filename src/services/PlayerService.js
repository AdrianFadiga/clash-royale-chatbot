const { PlayerRepository } = require("../repositories");
const { royaleApi } = require("../requests");

const PlayerService = {
	async getAllTags() {
		const tags = await PlayerRepository.getAllTags();

		return tags.map(({tag}) => tag);
	},

	async updateClanMembers() {
		const clanInfo = await royaleApi.getClanInfo();		

		const serializedClanMembers = serialize(clanInfo);

		const updatedClanMembers = await PlayerRepository.updateClanMembers(serializedClanMembers);

		return updatedClanMembers;
	},

};

function serialize(clanInfo) {
	return clanInfo.memberList.map(({tag, name, role, lastSeen}) => ({
		tag, clanTag: clanInfo.tag, name, role, lastSeen, createdAt: new Date()
	}));
}

module.exports = PlayerService;