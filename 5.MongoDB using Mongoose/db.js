const mongoose = require('mongoose');
const dotenv = require('dotenv');

// load env config
dotenv.config();



const connectDB = async () => {
    try {
        // Database connection logic here
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;