const express = require("express")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const logger = require("morgan")
const app = express();

const PORT = process.env.PORT || 8080

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)

app.listen(PORT, () => console.log("🌎 Listening on " + PORT))