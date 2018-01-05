const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routing = require("./routes/api");

//////set up express app
const app = express();
const port = 4000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

////////connect to mongodb////////////
//mongoose.connect('mongodb://localhost/api');
mongoose.connect("mongodb://localhost/natalia", { useMongoClient: true });
mongoose.Promise = global.Promise;

/////////////initialize routers////////////
//app.use('/api',require('./routes/api'));
app.use("/api", routing);

app.get("*", function(req, res) {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

///////////listen for request//////////
app.listen(process.env.port || 4000, () => {
	console.log("Nasłuchuj serwerze ");
});
