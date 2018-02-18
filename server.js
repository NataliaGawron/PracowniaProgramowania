const express = require("express");
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

// {
// 	bodyUsed: true;
// 	type: "cors";
// 	url: "http://localhost:4000/guitars";
// }

/* serves main page */
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

// odpalamy parsowanie requestow
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

//pobranie wszystkich gitar
//GET http://localhost:4000/guitars
app.get("/guitars", function(req, res) {
	console.log(req.body);
	setTimeout(function() {
		res.sendFile(__dirname + "/public/guitars.json");
	}, 1000);
});

////pobranie jednej gitary
/////GET http://localhost:4000/guitar
// app.get("/guitar", function(req, res) {
// 	console.log(req.body);
// 	setTimeout(function() {
// 		res.sendFile(__dirname + "/guitar.json");
// 	}, 1000);
// });

/* serves all the static files */
app.get(/^(.[css|js|png|gif|jpeg|jpg|bmp])$/, function(req, res) {
	res.sendFile(__dirname + req.params[0]);
});

var port = process.env.PORT || 4000;
app.listen(port, function() {
	console.log(`Listening on http://localhost: + ${port}`);
	console.log(
		`Wejdź na stronę http://localhost:${port} by wyświetlić plik index.html`
	);
});
