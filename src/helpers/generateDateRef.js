const moment = require("moment-timezone");
// esta função retorna Dia - 1, pois sempre será executada às 03h de cada dia
// para que salve referente ao dia da guerra;
function generateDateRef() {
	moment.locale("pt-br");
	moment.tz("America/Sao_Paulo");
	const date = moment().subtract(1, "days").format("DD-MM-YYYY");
	return date;
}

module.exports = generateDateRef;