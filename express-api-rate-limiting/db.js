require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

function connectToDB() {
    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log('Database Connected Successfully!');
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database is Disconnected!");
    })

    mongoose.connection.on('error', error => {
        console.log('Error Connecting to Database!', error)
    })
}

module.exports = {
    connectToDB
}