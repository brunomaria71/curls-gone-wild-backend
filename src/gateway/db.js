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
