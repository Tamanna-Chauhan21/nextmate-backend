import nextmateModel from "../models/nextmateModel.js";
import fs from 'fs'

//add nextmate item

const addNextmate = async (req, res) => {
  try {
    console.log("API HIT");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // ✅ check if file exists
    if (!req.file) {
      return res.json({ success: false, message: "No file uploaded" });
    }

    let image_filename = req.file.filename;

    const nextmate = new nextmateModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename
    });

    await nextmate.save();

    res.json({ success: true, message: "Nextmate Item Added" });

  } catch (error) {
    console.log("ERROR:", error);
    res.json({ success: false, message: error.message });
  }
};

//all nextmate items list
const listNextmate = async (req,res) => {
  try{
    const data= await nextmateModel.find({});
    res.json({success:true, data})
  }catch(error){
    console.log(error);
    res.json({success:false, message:"Error"})
  }
}

// remove nextmate items
const removeNextmateItem = async (req,res)=>{
  try{
      const nextmate= await nextmateModel.findById(req.body.id);
      fs.unlink(`uploads/${nextmate.image}`, ()=>{})
      await nextmateModel.findByIdAndDelete(req.body.id);
      res.json({success:true,message:"item removed"})
  }catch(error){
      console.log(error);
      res.json({success:false,message:"Error"})
  }
}

export {addNextmate, listNextmate, removeNextmateItem }
