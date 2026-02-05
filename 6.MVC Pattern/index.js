const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRouts');

const app = express();

// load dev
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', productRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});