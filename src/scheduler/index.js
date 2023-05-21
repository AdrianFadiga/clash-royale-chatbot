const coreScheduler = require("./coreScheduler");
const chatbotScheduler = require("./chatbotScheduler");

function scheduler() {
	coreScheduler();
	chatbotScheduler();
}

module.exports = scheduler();