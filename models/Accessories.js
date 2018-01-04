const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model - Accessories

const AccessoriesSchema = new Schema({
    producer: {
        type: Schema.Types.ObjectId,
        required: [true, 'ID accessories is required']
    },
    type: {
        type: String,
        required: [true, 'Type accessories is required']
    },
    name: {
        type: String,
        required: [true, 'Name accessories is required']
    },
    model: {
        typel: String,
        required: [true, 'Model accessories is required']   
    },
    colour: {
        type: String,
        required: [true, 'Color accessories is required']
    },
    price: {
        type: Number,
        required: [true, 'Price accessories is required']
    }
});

const Accessories = mongoose.model('accessories', AccessoriesSchema);

module.exports = Accessories;
