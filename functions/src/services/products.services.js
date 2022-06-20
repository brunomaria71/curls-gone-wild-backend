import { ObjectId } from "mongodb";
import { getProductsCollection } from "../gateway/db.js";

export const createProduct = async (product) => {
  try {
    const col = await getProductsCollection();
    const { insertedId } = await col.insertOne(product);

    return insertedId;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id) => {
  try {
    const col = await getProductsCollection();
    const product = await col.findOne({ _id: ObjectId(id) });
    return product;
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (name, updateObject) => {
  try {
    const col = await getProductsCollection();
    await col.updateOne({ name }, { $set: updateObject });
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async () => {
  try {
    const col = await getProductsCollection();
    const products = await col.find({}).toArray();
    return products;
  } catch (error) {
    console.error(error);
  }
};
