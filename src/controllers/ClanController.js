const { ClanService } = require("../services/ClanService");

const ClanController = {
	async currentWar(req, res) {
		const currentWarStatus = await ClanService.currentWarStatus();


		return res.status(200).json(currentWarStatus);
	},
};

module.exports = ClanController;