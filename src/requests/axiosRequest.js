const { default: axios } = require("axios");

const axiosRequest = async ({method, url, params = {}, data = {}, headers = {}}) => {
	const options = {
		method, url, params, data, headers
	};

	try {
		const response = await axios(options);
		return response;
	} catch (err) {
		return {data: null};
	}
};

module.exports = {axiosRequest};