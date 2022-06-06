import { Router } from "express";
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../services/products.services.js";

export const productRouter = Router();

productRouter.post("/product", async (req, res) => {
  const product = req.body;
  const id = await createProduct(product);
  res.send(id.toString());
});

productRouter.get("/products", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

productRouter.get("/product/:name", async (req, res) => {
  const { name } = req.params;
  const product = await getProduct(name);
  res.send(product);
});

productRouter.patch("/product", async (req, res) => {
  const product = req.body;
  const newProduct = await updateProduct(req.body.name, product);
  res.send(req.body);
});
