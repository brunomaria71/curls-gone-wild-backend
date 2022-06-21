import { Router } from "express";
import {
  createReview,
  getReview,
  getReviews,
} from "../services/reviews.services.js";

export const reviewsRouter = Router();

reviewsRouter.post("/review", async (req, res) => {
  try {
    const review = req.body;
    const id = await createReview(review);
    res.send(id.toString());
  } catch (error) {
    console.error(error);
  }
});

reviewsRouter.get("/reviews", async (req, res) => {
  try {
    const routines = await getReviews();
    res.send(routines);
  } catch (error) {
    console.error(error);
  }
});

reviewsRouter.get("/reviews/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const review = await getReview(name);
    res.send(review);
  } catch (error) {
    console.error(error);
  }
});
