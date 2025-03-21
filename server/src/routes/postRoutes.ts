import express from 'express'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'
import PostSchema from '../../mongodb/models/posts.js'

dotenv.config()

const router = express.Router()


