import mongoose from "mongoose";

const connectDB = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
          console.log(`DATABASE CONNECTED`);
    } catch (error) {
        console.log(error.message);
    }
};
export default connectDB;