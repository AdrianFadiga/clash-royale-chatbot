const { default: axios } = require("axios");

const axiosRequest = async ({method, url, params = {}, data = {}, headers = {}}) => {
	const options = {
		method, url, params, data, headers
	};

	try {
		const response = await axios(options);
		return response;
	} catch (err) {
		return {data: []};
	}
};

const getClanMembers = async (clanTag, Authorization) => {
	const {data} = await axiosRequest({method: "GET", url: `https://api.clashroyale.com/v1/clans/${clanTag}/`, 
		headers: {Authorization}});
	return data.memberList;
};

const getCurrentRiverRace = async (clanTag, Authorization) => {
	const {data} = await axiosRequest({method: "GET", url: `https://api.clashroyale.com/v1/clans/${clanTag}/currentriverrace`, headers: 
	{Authorization}});
	return data.clan.participants;
};

module.exports = {getClanMembers, getCurrentRiverRace};