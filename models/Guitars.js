const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema and a Model - Guitar

const GuitarsSchema = new Schema({
	producer: {
		type: String,
		required: [true, "Producer guitar is required"],
	},
	type: {
		type: String,
		required: [true, "Type guitar is required"],
	},
	model: {
		type: String,
		required: [true, "Model guitar is required"],
	},
	colour: {
		type: String,
		required: [true, "Color guitar is required"],
	},
	price: {
		type: Number,
		required: [true, "Price guitar is required"],
	},
});

const Guitars = mongoose.model("guitar", GuitarsSchema);

module.exports = Guitars;
