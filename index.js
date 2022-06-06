import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { productRouter } from "./src/routes/products.routes.js";

config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(productRouter);

app.listen(5050, () => {
  console.log("Listening on Port: 5050");
});
