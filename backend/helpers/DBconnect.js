import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connect = async ()=>{ 
     await mongoose.connect(process.env.MONGO_URI)
    .then(console.log("connected to DB"))
    .catch(error=>console.log(error))
}
export default connect ;