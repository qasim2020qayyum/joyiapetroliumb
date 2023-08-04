const mongoose = require("mongoose")
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://qasim20qayyum:qasim2020qayyUM@cluster0.mhruebn.mongodb.net/?retryWrites=true&w=majority')
        console.log(`mongo db connected at ${conn.connection.host}` );
    } catch (error) {
        console.log(error);
        process.exit(1) 
    }
}
module.exports = connectDB
