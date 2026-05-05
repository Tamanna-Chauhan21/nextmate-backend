import mongoose from "mongoose";
export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://chauhan2107tamanna_db_user:mgeSFRnDlZFjbEg5@cluster0.gip87pf.mongodb.net/nextmate').then(()=>console.log("DB Connected"));

}