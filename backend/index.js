import express from "express"
import connect from "./helpers/DBconnect.js"
import dotenv from "dotenv"

connect()
dotenv.config()

const app =express()
const PORT = process.env.PORT || 3000

app.listen(3000,()=>{
    console.log(`server is running on ${PORT}`)
})