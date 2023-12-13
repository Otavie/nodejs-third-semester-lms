require('dotenv').config();
const express = require('express');
const database = require('./db');
const app = express();
const bookRoute = require('./routes/book.routes')
const PORT = process.env.PORT;
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,           // 15 minutes
    max: 100,                           // Limit each IP to 100 per 'window' ie per 15 minutes
    standardHeaders: true,              // Return Rate Limit Info in the 'RateLimit-*' Headers
    legacyHeaders: false                // Disable the 'X-RateLimit-*' Headers
})

// Connect to Database
database.connectToDB();

// Apply Rate Limiting Middleware to All Requests
app.use(limiter);

app.use(express.json())
app.use('/books', bookRoute);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})