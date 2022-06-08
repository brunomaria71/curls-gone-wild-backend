import { Router } from "express";
import {
  createReview,
  getReview,
  getReviews,
} from "../services/reviews.services.js";

export const reviewsRouter = Router();

reviewsRouter.post("/review", async (req, res) => {
  const review = req.body;
  const id = await createReview(review);
  res.send(id.toString());
});

reviewsRouter.get("/reviews", async (req, res) => {
  const routines = await getReviews();
  res.send(routines);
});

reviewsRouter.get("/reviews/:name", async (req, res) => {
  const { name } = req.params;
  const review = await getReview(name);
  res.send(review);
});
