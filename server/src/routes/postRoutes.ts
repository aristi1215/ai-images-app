import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../../mongodb/models/posts.ts";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

router.route("/").post(async (req, res) => {
  console.log(req.body);
  const { name, prompt, photo } = req.body;
  try {
    const result = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({ name, prompt, photo: result.url});

    res.json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

export default router;
