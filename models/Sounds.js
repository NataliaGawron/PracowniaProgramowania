const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema and a Model - Sounds

const SoundsSchema = new Schema({
	name: {
		type: String,
		required: [true, "Name sound is required"],
	},
	producer: {
		type: String,
		required: [true, "Producer sound is required"],
	},
	model: {
		type: String,
		required: [true, "Model sound is required"],
	},
	colour: {
		type: String,
		required: [true, "Color sound is required"],
	},
	price: {
		type: Number,
		required: [true, "Price sound is required"],
	},
});

const Sounds = mongoose.model("sound", SoundsSchema);

module.exports = Sounds;
