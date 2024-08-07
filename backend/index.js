import express from "express"
import connect from "./helpers/DBconnect.js"
import dotenv from "dotenv"
import authRouter from "./routes/authRouter.js"

connect()
dotenv.config()

const app =express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/api/auth",authRouter)

app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message =err.message || "internal Error"
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    })

})

app.listen(3000,()=>{
    console.log(`server is running on ${PORT}`)
})