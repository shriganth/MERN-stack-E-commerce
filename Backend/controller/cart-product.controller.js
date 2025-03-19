import mongoose from "mongoose";
import cartProduct from "../model/cart-product.model.js";

export const getCartProduct = async (req, res) => {
    try {
        const cartProducts = await cartProduct.find({});
        res.status(200).json({ success: true, data: cartProducts });
    } catch (error) {
        console.log("Error, while fetching product: ", error.message);
        res.status(500).json({ success: false, message: "Internal server error..." });
    }
};

export const addCartProducts = async(req, res) => {
    const product = req.body;

    const newCartProduct = new cartProduct(product);
        try {
            await newCartProduct.save();
            res.status(200).json({ success: true, message: "Product created sucessfully..."});
        } catch (error) {
            console.log("Error, while creating product: ", error.message);
            res.status(500).json({ success: false, message: "Internal server error..."});
        }
};
