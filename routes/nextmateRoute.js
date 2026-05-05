import express from "express"
import { addNextmate,listNextmate,removeNextmateItem } from "../controllers/nextmateController.js"
import multer from "multer"

const nextmateRouter= express.Router();
//Image Storage engine

const storage= multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload= multer({storage:storage})
nextmateRouter.post("/add",upload.single("image"),addNextmate)
nextmateRouter.get("/list",listNextmate)
nextmateRouter.post("/remove",removeNextmateItem);
// nextmateRouter.post("/add/nextmate",upload.single("image"),addNextmate)
export default nextmateRouter;