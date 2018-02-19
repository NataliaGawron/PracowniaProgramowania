const express = require("express");
const router = express.Router();
const Guitars = require("../models/Guitars");
const Accessories = require("../models/Accessories");
const Sounds = require("../models/Sounds");

//ctr K + ctr C  <-- ctr K + ctr U

/////////////////////////Guitars function/////////////////
///////add guitar to database//////////
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

router.post("/accessoriesMusic", (req, res, next) => {
	const accessories = req.body;
	Accessories.create(accessories)
		.then(accessories => {
			res.status(201).send(accessories);
		})
		.catch(err => {
			console.log(err.message);
		});
});

router.get("/accessoriesMusic", function(req, res) {
	Accessories.find({})
		.then(accessoriesMusic => {
			res.send(accessoriesMusic);
		})
		.catch(err => {
			res.status(404).json({
				reason: "Not found",
			});
		});
});

//delete a accessories from the db//
router.delete("/accessoriesMusic/:id", function(req, res, next) {
	Accessories.findByIdAndRemove({ _id: req.params.id })
		.then(function(accessories) {
			res.send(accessories);
		})
		.catch(next);
});

// update a accessories in the db
router.put("/accessoriesMusic/:id", function(req, res, next) {
	Accessories.findByIdAndUpdate({ _id: req.params.id }, req.body)
		.then(function() {
			Accessories.findOne({ _id: req.params.id }).then(function(
				accessories
			) {
				res.send(accessories);
			});
		})
		.catch(next);
});

// get a accessories in the db
router.get("/accessoriesMusic/:id", function(req, res) {
	const accessories_id = req.params.id;
	Accessories.find({
		_id: accessories_id,
	})
		.then(accessories => {
			res.send(accessories);
		})
		.catch(err => console.log(err));
});

/////////////////// Sounds ////////////////////////
router.post("/sounds", (req, res, next) => {
	const sound = req.body;
	Sounds.create(sound)
		.then(sound => {
			res.status(201).send(sound);
		})
		.catch(err => {
			console.log(err.message);
		});
});

router.get("/sounds", function(req, res) {
	Sounds.find({})
		.then(sounds => {
			res.send(sounds);
		})
		.catch(err => {
			res.status(404).json({
				reason: "Not found",
			});
		});
});

//delete a sound from the db//
router.delete("/sounds/:id", function(req, res, next) {
	Sounds.findByIdAndRemove({ _id: req.params.id })
		.then(function(sound) {
			res.send(sound);
		})
		.catch(next);
});

// update a sound in the db
router.put("/sounds/:id", function(req, res, next) {
	Sounds.findByIdAndUpdate({ _id: req.params.id }, req.body)
		.then(function() {
			Sounds.findOne({ _id: req.params.id }).then(function(sound) {
				res.send(sound);
			});
		})
		.catch(next);
});

// get a sound in the db
router.get("/sounds/:id", function(req, res) {
	const sound_id = req.params.id;
	Sounds.find({
		_id: sound_id,
	})
		.then(sound => {
			res.send(sound);
		})
		.catch(err => console.log(err));
});

module.exports = router;
