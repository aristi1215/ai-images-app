import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "../mongodb/connect.ts";
import dalleRoutes from "./routes/dalleRoutes.ts";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/dalleRoutes", dalleRoutes);

const PORT = process.env.PORT || 3000;

//connection with the database
const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(
        `Listening on port ${PORT},  server has started on: http://localhost:3000`
      )
    );
  } catch (err) {
    console.error(err);
  }
};

startServer();


app.get("/", async (req, res) => {
  res.json({ working: "working" });
});

app.get('/hola', (req,res) => {
  res.send('holaadsasd')
})
