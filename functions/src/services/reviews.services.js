import { getReviewsCollection } from "../gateway/db.js";

export const createReview = async (review) => {
  try {
    const col = await getReviewsCollection();
    const { insertedId } = await col.insertOne(review);

    return insertedId;
  } catch (error) {
    console.error(error);
  }
};

export const getReview = async (name) => {
  try {
    const col = await getReviewsCollection();
    const review = await col.findOne({ name });

    return review;
  } catch (error) {
    console.error(error);
  }
};

export const getReviews = async () => {
  try {
    const col = await getReviewsCollection();
    const reviews = await col.find({}).toArray();
    return reviews;
  } catch (error) {
    console.error(error);
  }
};

export const updateReview = async (name, updateObject) => {
  try {
    const col = await getReviewsCollection();
    await col.updateOne({ name }, { $set: updateObject });
  } catch (error) {
    console.error(error);
  }
};
