const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model - Accessories

const AccessoriesSchema = new Schema({
    type: {
        type: String,
        required: [true, 'Type accessories is required']
    },
    name: {
        name: String,
        required: [true, 'Name accessories is required']
    },
    model: {
        model: String,
        required: [true, 'Model accessories is required']   
    },
    colour: {
        colour: String,
        required: [true, 'Color accessories is required']
    },
    price: {
        price: Float,
        required: [true, 'Price accessories is required']
    }  
});

const Accessories = mongoose.model('accessories', AccessoriesSchema);

module.exports = Accessories;
