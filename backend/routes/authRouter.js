import express from "express"
import authController from "../controllers/authController.js"

const router = express.Router()

router.post("/singUp",authController.register)

export default router