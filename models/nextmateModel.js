import mongoose from "mongoose";

const nextmateSchema= new mongoose.Schema({
    name : {type: String, required:true},
    description :{type: String, required:true},
    price :{type: Number, required:true},
    image :{type: String, required:true},
    category :{type: String, required:true}
})

const nextmateModel= mongoose.models.nextmate || mongoose.model("nextmate", nextmateSchema)
export default nextmateModel;