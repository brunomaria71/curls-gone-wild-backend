import { MongoClient } from "mongodb";

export const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();

  return client.db("curls-gone-wild");
};

export const getProductsCollection = async () => {
  const db = await getDb();

  return db.collection("products");
};

export const getRoutinesCollection = async () => {
  const db = await getDb();

  return db.collection("routines");
};

export const getReviewsCollection = async () => {
  const db = await getDb();

  return db.collection("reviews");
};
