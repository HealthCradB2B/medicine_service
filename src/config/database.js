import mongoose from "mongoose";

export const connect = async() =>{
   
    await mongoose.connect(/**put the mongodb connection url */);
}