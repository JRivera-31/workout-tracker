const express = require("express")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds157040.mlab.com:57040/heroku_kvs7lp26", {
  
});

const logger = require("morgan")
const app = express();

const PORT = 3000

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)

app.listen(PORT, () => console.log("🌎 Listening on " + PORT))