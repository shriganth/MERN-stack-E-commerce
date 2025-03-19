import express from "express";
import { addCartProducts, getCartProduct } from "../controller/cart-product.controller.js";

const cartProductRoute = express.Router();

cartProductRoute.post("/", addCartProducts);
cartProductRoute.get("/", getCartProduct);

export default cartProductRoute;