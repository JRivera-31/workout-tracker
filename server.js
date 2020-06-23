const express = require("express")

const logger = require("morgan")
const app = express();

const PORT = 3000

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, () => console.log("🌎 Listening on " + PORT))