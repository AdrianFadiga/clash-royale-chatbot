const express = require("express");
const router = require("./routes");
const app = express();
const scheduler = require("./scheduler");
require("dotenv").config();

scheduler();

const port = process.env.PORT;

app.use("/", router);

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});