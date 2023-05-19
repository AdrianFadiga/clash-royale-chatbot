const express = require("express");
const app = express();
const scheduler = require("./scheduler");
require("dotenv").config();

scheduler();

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});