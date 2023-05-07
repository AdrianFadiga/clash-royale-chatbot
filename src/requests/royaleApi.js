const { axiosRequest } = require("./axiosRequest");

const clanTag = "%232JU9UR";
require("dotenv").config();

const Authorization = process.env.AUTHORIZATION;

const royaleApi = {
	async getClanMembers() {
		console.log(Authorization);
		const {data} = await axiosRequest({method: "GET", url: `https://api.clashroyale.com/v1/clans/${clanTag}/members`, 
			headers: {Authorization}});
		return data.items;
	},

	async getCurrentRiverRace() {
		const {data} = await axiosRequest({method: "GET", url: `https://api.clashroyale.com/v1/clans/${clanTag}/currentriverrace`, headers: 
    {Authorization}});
		return data.clan;
	}
};

module.exports = royaleApi;