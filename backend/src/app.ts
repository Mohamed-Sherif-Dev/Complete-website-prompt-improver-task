import express from "express";
import cors from "cors";
import improvePromptRouter from "./routes/improvePrompt.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/improve-prompt" , improvePromptRouter)

export default app;