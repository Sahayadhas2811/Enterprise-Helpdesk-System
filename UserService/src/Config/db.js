const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('DB is Connected')
    } catch (error) {
        console.log(`error in connecting db ${error}`)
        process.exit(1)
    }
};

module.exports = connectDB