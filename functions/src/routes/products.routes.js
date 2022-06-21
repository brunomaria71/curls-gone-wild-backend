import { Router } from "express";
import { getProduct, getProducts } from "../services/products.services.js";

export const productRouter = Router();

productRouter.get("/products", async (req, res) => {
  try {
    const products = await getProducts();
    res.send(products);
  } catch (error) {
    console.error(error);
  }
});

productRouter.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProduct(id);
    res.send(product);
  } catch (error) {
    console.error(error);
  }
});

// productRouter.post("/product", async (req, res) => {
//   const product = req.body;
//   const id = await createProduct(product);
//   res.send(id.toString());
// });

// productRouter.patch("/product", async (req, res) => {
//   try {
//     const product = req.body;
//     const newProduct = await updateProduct(req.body.name, product);
//     res.send(req.body);
//   } catch (error) {
//     console.error(error);
//   }
// });
