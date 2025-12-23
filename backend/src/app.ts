import express from "express";
import cors from "cors";
import improvePromptRouter from "./routes/improvePrompt.route.js";

const app = express();

// app.use(cors());
const corsOptions: cors.CorsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST" , "PUT" , "DELETE" , "PATCH"],
    credentials: true
} 
app.use(express.json());

app.use("/api/improve-prompt" , improvePromptRouter)

export default app;