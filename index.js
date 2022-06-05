import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3031, () => {
  console.log("Listening on Port: 3031");
});
