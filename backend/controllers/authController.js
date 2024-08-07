import bcryptjs from "bcryptjs"
import userModel from "../models/userModel.js"
import { errorHandler } from "../utils/error.js"
const authController ={
    register : async (req,res,next)=>{
        const {username,email,password} = req.body
        if(!username || !email || !password){
          return  next(errorHandler(400,"pls filed all inputes"))
        }
        const hashedPassword = bcryptjs.hashSync(password,10)
        const newUser = new userModel({username,email,password:hashedPassword})
        try {
            await newUser.save()
            res.status(201).json({message:"user created successfuly"})
            
        } catch (error) {
            
           res.status(500).json(error.message)
        }
       

    }
}
export default authController