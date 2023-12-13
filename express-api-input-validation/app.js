require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const database = require('./db');
const bookRoute = require('./routes/book.routes')

// Database Connection
database.connectToMongoDB();

app.use(express.json());
app.use('/books', bookRoute);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})