const express = require("express");
const router = express.Router();
const Guitars = require("../models/Guitars");
//const Accessories = require('../models/Accessories');

//const Accessories = require('../models/Accessories');

///////add guitar to database//////////
//ctr K + ctr C  <-- ctr K + ctr U

router.post("/guitars", (req, res, next) => {
	const guitar = req.body;
	Guitars.create(guitar)
		.then(guitar => {
			res.status(201).send(guitar);
		})
		.catch(err => {
			console.log(err.message);
		});
});

/////////////////////////Guitars/////////////////
router.get("/guitars", function(req, res) {
	Guitars.find({})
		.then(guitars => {
			res.send(guitars);
		})
		.catch(err => {
			res.status(404).json({ reason: "Not found" });
		});
});

//delete a guitar from the db//
router.delete("/guitars/:id", (req, res) => {
	res.send({ type: "DELETE" });
});
//udpate
router.patch("/guitars/:id", function(req, res) {
	res.send({ type: "PATCH" });
});
//zaimplementuj PATCH I DELETE /guitars/:id
router.get("/guitars/:id", function(req, res) {
	const guitar_id = req.params.id;
	Guitars.find({ _id: guitar_id })
		.then(guitar => {
			res.send(guitar);
		})
		.catch(err => console.log(err));
});

module.exports = router;
