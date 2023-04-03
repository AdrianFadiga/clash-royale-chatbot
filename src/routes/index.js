const router = require("express").Router();
const {ClanController} = require("../controllers");

router.get("/current_war/:clanId", ClanController.currentWar);

module.exports = router;