const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema and a Model - Accessories

const AccessoriesSchema = new Schema({
	name: {
		type: String,
		required: [true, "Name accessories is required"],
	},
	producer: {
		type: String,
		required: [true, "Producer accessories is required"],
	},
	model: {
		type: String,
		required: [true, "Model accessories is required"],
	},
	colour: {
		type: String,
		required: [true, "Color accessories is required"],
	},
	price: {
		type: Number,
		required: [true, "Price accessories is required"],
	},
});

const Accessories = mongoose.model("accessoriesMusic", AccessoriesSchema);

module.exports = Accessories;
