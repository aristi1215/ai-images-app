import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});



router.route("/").get(async (req, res) => {
  // const response = await client.responses.create({
  //   model: "gpt-4o",
  //   input: "Write a one-sentence bedtime story about a unicorn.",
  // });


  res.send('funcionando');

});

router.route("/").post(async (req, res) => {
  res.send("nada por aqui");
});

export default router;
