const express = require("express");
const app = express();
require("./scheduler");
require("dotenv").config();

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});