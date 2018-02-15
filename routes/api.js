const express = require("express");
const router = express.Router();
const Guitars = require("../models/Guitars");

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
			res.status(404).json({
				reason: "Not found",
			});
		});
});

//delete a guitar from the db//
router.delete("/guitars/:id", function(req, res, next) {
	Guitars.findByIdAndRemove({ _id: req.params.id })
		.then(function(guitar) {
			res.send(guitar);
		})
		.catch(next);
});

// update a guitar in the db
router.put("/guitars/:id", function(req, res, next) {
	Guitars.findByIdAndUpdate({ _id: req.params.id }, req.body)
		.then(function() {
			Guitars.findOne({ _id: req.params.id }).then(function(guitar) {
				res.send(guitar);
			});
		})
		.catch(next);
});

// get a guitar in the db
router.get("/guitars/:id", function(req, res) {
	const guitar_id = req.params.id;
	Guitars.find({
		_id: guitar_id,
	})
		.then(guitar => {
			res.send(guitar);
		})
		.catch(err => console.log(err));
});

/*router.patch("/guitars/:id", function(req, res) {
	res.send({ type: "PATCH" });
});*/

module.exports = router;
