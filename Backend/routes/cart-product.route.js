import express from "express";
import { addCartProducts, deleteCartProducts, getCartProduct } from "../controller/cart-product.controller.js";

const cartProductRoute = express.Router();

cartProductRoute.post("/", addCartProducts);
cartProductRoute.get("/", getCartProduct);
cartProductRoute.delete("/:id", deleteCartProducts);

export default cartProductRoute;