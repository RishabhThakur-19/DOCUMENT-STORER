const mongoose = require('mongoose');
const connectDB = async () => {
   try{ 
    await mongoose.connect("mongodb://127.0.0.1:27017/docdb");
    console.log("MongoDB connected");
}catch(err){
    console.log("failed");
    console.error(err.message);
    process.exit(1);
}
}
console.log("Connecting to MongoDB...")
module.exports = connectDB;