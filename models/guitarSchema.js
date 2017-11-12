const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model - Guitar

const GuitarSchema = new Schema({
    id_products: {
        type: Schema.Types.ObjectId,
        required: [true, 'ID_products field is required']
    },
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
        price: String,
        required: [true, 'Price guitar is required']
    }
});

const Guitars = mongoose.model('guitar', GuitarSchema);

module.exports = Guitars;
