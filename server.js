import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import nextmateRouter from "./routes/nextmateRoute.js"
import userRouter from "./routes/userRoute.js"
import userModel from "./models/userModel.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//app config
const app=express()
const port= 4000
//middleware
app.use(express.json())
app.use(cors())
// db connection
connectDB();
// api endpoint
app.use("/api/nextmate",nextmateRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
// app.use("/api/order", orderRouter)
app.use("/api/order", orderRouter);
app.get("/",(req,res)=>{
    res.send("API working")
})
app.listen(port,()=>{
    console.log(`Server Started on host http://localhost:${port}`)
})

//mongodb+srv://chauhan2107tamanna_db_user:mgeSFRnDlZFjbEg5@cluster0.gip87pf.mongodb.net/