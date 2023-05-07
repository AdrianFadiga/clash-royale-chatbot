const express = require("express");
const router = require("./routes");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.use("/", router);

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});