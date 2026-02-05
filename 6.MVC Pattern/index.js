const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});