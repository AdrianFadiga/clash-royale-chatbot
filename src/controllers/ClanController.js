const { ClanService } = require("../services/ClanService");

const ClanController = {
	async currentWar(req, res) {
		const { clanId } = req.params;
		const { authorization } = req.headers;
		const currentWarStatus = await ClanService.currentWarStatus(clanId, authorization);


		return res.status(200).json(currentWarStatus);
	},
};

module.exports = ClanController;