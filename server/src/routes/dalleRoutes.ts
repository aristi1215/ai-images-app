import express, { response } from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

router.route("/").get(async (req, res) => {
  res.send("holanda desde las rutas de dalle");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      quality: "standard"
    });

    const image = response.data[0].url
    res.status(200).json({photo: image})
    

  } catch (err) {
    console.log(err);
    res.status(500).send({message: err})
}});

export default router;
