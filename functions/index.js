import cors from "cors";
import { config } from "dotenv";
import express from "express";
import functions from "firebase-functions";
import { productRouter } from "./src/routes/products.routes.js";
import { reviewsRouter } from "./src/routes/reviews.routes.js";
import { routineRouter } from "./src/routes/routines.routes.js";

config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(productRouter);
app.use(routineRouter);
app.use(reviewsRouter);

export const api = functions.https.onRequest(app);
