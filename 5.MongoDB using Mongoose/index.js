const express = require('express');
// const { default: mongoose } = require('mongoose');
const app = express();
const connectDB = require('./db');


const PORT = 3000;

// body parser middleware
app.use(express.json());
// connect to database
connectDB();

app.get('/', (req, res) => {
    console.log("i am inside home page route handler");
    res.send('Hello World Priyanshu!');

})

app.listen(PORT, () => {
    console.log("server is up")

})
    