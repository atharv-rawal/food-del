import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect("mongodb://localhost:27017/food-del-db").then(()=>console.log("DB Connected"));
   
}


