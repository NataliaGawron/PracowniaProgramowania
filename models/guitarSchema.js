const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model - Guitar

const GuitarSchema = new Schema({
    type: {
        type: String,
        required: [true, 'Type guitar is required']
    },
    name: {
        name: String,
        required: [true, 'Name guitar is required']
    },
    model: {
        model: String,
        required: [true, 'Model guitar is required']   
    },
    colour: {
        colour: String,
        required: [true, 'Color guitar is required']
    },
    price: {
        price: Float,
        required: [true, 'Price guitar is required']
    }  
});

const Guitars = mongoose.model('guitar', GuitarSchema);

module.exports = Guitars;
