import { getReviewsCollection } from "../gateway/db.js";

export const createReview = async (review) => {
  const col = await getReviewsCollection();
  const { insertedId } = await col.insertOne(review);

  return insertedId;
};

export const getReview = async (name) => {
  const col = await getReviewsCollection();
  const review = await col.findOne({ name });

  return review;
};

export const getReviews = async () => {
  const col = await getReviewsCollection();
  const reviews = await col.find({}).toArray();
  return reviews;
};

export const updateReview = async (name, updateObject) => {
  const col = await getReviewsCollection();
  await col.updateOne({ name }, { $set: updateObject });
};
