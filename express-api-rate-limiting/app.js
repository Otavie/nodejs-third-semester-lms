require('dotenv').config();
const express = require('express');
const database = require('./db');
const app = express();
const bookRoute = require('./routes/book.routes')
const PORT = process.env.PORT;

// Connect to Database
database.connectToDB()

app.use(express.json())
app.use('/books', bookRoute);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})