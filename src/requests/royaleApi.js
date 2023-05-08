const { axiosRequest } = require("./axiosRequest");

require("dotenv").config();

// Tem que deixar esse .replace para a API do Clash Royale não bugar com o #.
const clanTag = process.env.CLAN_TAG.replace("#", "%23");
const Authorization = process.env.AUTHORIZATION;

const royaleApi = {
	async getClanInfo() {
		const {data} = await axiosRequest({method: "GET", url: `https://api.clashroyale.com/v1/clans/${clanTag}`, 
			headers: {Authorization}});
		return data;
	},

	async getCurrentRiverRace() {
		const {data} = await axiosRequest({method: "GET", url: `https://api.clashroyale.com/v1/clans/${clanTag}/currentriverrace`, headers: 
    {Authorization}});
		return data.clan;
	}
};

module.exports = royaleApi;