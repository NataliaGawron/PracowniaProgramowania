const express = require("express");
const mongoose = require("mongoose");
const routing = require("./routes/api");
var morgan = require("morgan");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(morgan("combined"));
//CORS;
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

////////connect to mongodb////////////
//mongoose.connect('mongodb://localhost/api');
mongoose.connect("mongodb://localhost/natalia", { useMongoClient: true });
mongoose.Promise = global.Promise;

/////////////initialize routers////////////
//app.use('/api',require('./routes/api'));
app.use("/api", routing);

// {
// 	bodyUsed: true;
// 	type: "cors";
// 	url: "http://localhost:4000/guitars";
// }

/* serves main page */
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

// parsowanie requestow
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

//pobranie z pliku .json wszystkich gitar
//GET http://localhost:4000/guitars
app.get("/guitars", function(req, res) {
	console.log(req.body);
	setTimeout(function() {
		res.sendFile(__dirname + "/public/guitars.json");
	}, 1000);
});

////pobranie jednej gitary
/////GET http://localhost:4000/guitar
app.get("/guitar", function(req, res) {
	console.log(req.body);
	setTimeout(function() {
		res.sendFile(__dirname + "/guitar.json/:id");
	}, 1000);
});

//pobranie z pliku .json nagłośnienia
//GET http://localhost:4000/sounds
app.get("/sounds", function(req, res) {
	console.log(req.body);
	setTimeout(function() {
		res.sendFile(__dirname + "/public/sounds.json");
	}, 1000);
});

//pobranie z pliku .json akcesorii
//GET http://localhost:4000/accessoriesMusic
app.get("/accessoriesMusic", function(req, res) {
	console.log(req.body);
	setTimeout(function() {
		res.sendFile(__dirname + "/public/accessoriesMusic.json");
	}, 1000);
});

/* serves all the static files */
app.get(/^(.[css|js|png|gif|jpeg|jpg|bmp])$/, function(req, res) {
	res.sendFile(__dirname + req.params[0]);
});

var port = process.env.PORT || 4000;
app.listen(port, function() {
	console.log(`Listening on server http://localhost: + ${port}`);
	console.log(
		`Wejdź na stronę http://localhost:${port}, by wyświetlić plik index.html`
	);
});
