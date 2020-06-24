const express = require("express")

const logger = require("morgan")
const app = express();

const PORT = 3000

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

const htmlRoutes = require("./routes/html-routes.js")
htmlRoutes(app)
const apiRoutes = require("./routes/api-routes.js")
apiRoutes(app)


app.listen(PORT, () => console.log("🌎 Listening on " + PORT))