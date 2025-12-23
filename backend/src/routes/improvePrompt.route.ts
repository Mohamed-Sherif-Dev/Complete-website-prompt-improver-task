import { Router } from "express";
import { improvePrompt } from "../services/improvePrompt.server.js";

const router = Router();


router.post("/", (req , res)=>{
    try {
        const {idea} = req.body

        const improvedPrompt = improvePrompt(idea)

        res.status(200).json({improvedPrompt})
    } catch (error) {
        res.status(400).json({
            message: (error as Error).message
        })
    }
})


export default router