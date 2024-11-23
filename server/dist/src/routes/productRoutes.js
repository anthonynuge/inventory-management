"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../contollers/productController");
const router = (0, express_1.Router)();
// geting products from main page
router.get("/", productController_1.getProducts);
// creating a prduct can have same route if different crud
router.post("/", productController_1.createProduct);
exports.default = router;
