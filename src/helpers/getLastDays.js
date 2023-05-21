function getLastDays(days = 1) {
	const today = new Date();
	today.setHours(23, 59, 59, 9999);
	const millisecondsPerDay = 24 * 60 * 60 * 1000;
	const lastDaysAgo = new Date(Date.now() - (days * millisecondsPerDay));
	lastDaysAgo.setHours(0, 0, 0, 0);

	return {
		today,
		lastDaysAgo,
	};
}

module.exports = getLastDays;