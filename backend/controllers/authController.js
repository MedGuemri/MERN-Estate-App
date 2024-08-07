import bcryptjs from "bcryptjs"
import userModel from "../models/userModel.js"
const authController ={
    register : async (req,res)=>{
        const {username,email,password} = req.body
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