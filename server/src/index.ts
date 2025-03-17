import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("successfully connected to db"))
  .catch((err) => console.error(err));
  

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get("/", async (req, res) => {
  const prompt =
    "Explicame como funciona la ia en pocas palabras, explicame algunos de los algoritmos que usa para imitar la inteligencia humana";

  const result = await model.generateContent(prompt);
  res.send(result.response.text());
});
