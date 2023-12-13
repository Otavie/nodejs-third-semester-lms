const mongoose = require('mongoose');
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI;

// Connect to the MongoDB
function connectToMongoDB() {
    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log('MongoDB Connected Successfully')
    })

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB Disconnected Successfully');
    })

    mongoose.connection.on("error", error => {
        console.log('MongoDB Connection Error: ', error)
    })
}

module.exports = {
    connectToMongoDB
}