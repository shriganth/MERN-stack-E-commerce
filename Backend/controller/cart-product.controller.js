import mongoose from "mongoose";
import cartProduct from "../model/cart-product.model.js";
import signup from "../model/signup.model.js";

export const getCartProduct = async (req, res) => {
    // const { id } = 
    try {
        const cartProducts = await cartProduct.find({});
        res.status(200).json({ success: true, data: cartProducts });
    } catch (error) {
        console.log("Error, while fetching product: ", error.message);
        res.status(500).json({ success: false, message: "Internal server error..." });
    }
};

export const addCartProducts = async(req, res) => {
    const {name, price, image} = req.body;
    const { id } = req.params.userId;

    const user = await signup.findById({id});
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    const newCartProduct = new cartProduct({name, price, image, id});
        try {
            await newCartProduct.save();
            res.status(200).json({ success: true, message: "Cart created sucessfully..."});
        } catch (error) {
            console.log("Error, while creating product: ", error.message);
            res.status(500).json({ success: false, message: "Internal server error..."});
        }
};

export const deleteCartProducts = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({ success: false, message: "Invalid cart ID..."});
    }

    try {
        const existingProduct = await cartProduct.findById(id);

        if (!existingProduct) {
            res.status(500).json({ success: false, message: "Cart ID not found..."});
        }

        await cartProduct.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Cart item deleted sucessfully..."});

    } catch (error) {
        console.log("Error, while deleting cart item: ", error.message);
        res.status(500).json({ success: false, message: "Internal server error..."});
    }
};