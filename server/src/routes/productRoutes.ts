import { Router } from "express";
import { getProducts, createProduct } from "../contollers/productController";

const router = Router();

// geting products from main page
router.get("/", getProducts);

// creating a prduct can have same route if different crud
router.post("/", createProduct);

export default router;
