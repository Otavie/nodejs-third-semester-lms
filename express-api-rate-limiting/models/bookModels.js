const mongoose = require('mongoose');

// Define Schema
const Schema = mongoose.Schema;

// Define Book Schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: true,
        max: [2023, 'Year must be less than or equal to 2023!']         // Custom Validation Message for Year
    },
    isbn: {
        type: String,
        required: true,
        unique: [true, 'ISBN must be unique!']                          // Custom Validation Message for ISBN
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be greater or equal to 0!']                // Custom Validation Message for Price
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastUpdatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Books', BookSchema);