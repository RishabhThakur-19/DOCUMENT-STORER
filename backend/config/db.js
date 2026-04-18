const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./authentication/.env'});
const connectDB = async () => {
   try{ 
    await mongoose.connect(process.env.URI,{
        dbName:"DocumentStore",
    });
    console.log("MongoDB connected");
}catch(err){
    console.log("failed");
    console.error(err.message);
    process.exit(1);
}
}
console.log("Connecting to MongoDB...")
module.exports = connectDB;