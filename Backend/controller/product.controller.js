import mongoose from "mongoose";
import Product from "../model/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products});
    } catch (error) {
        console.log("Error in fetching products: ", error.message());
        res.status(500).json({ success: false, message: "Server error..."});
    }
};

export const createProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        res.status(500).json({ success:false, message: "Please, Provide all feilds..."});
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(200).json({ success: true, message: "Product created sucessfully..."});
    } catch (error) {
        console.log("Error, while creating product: ", error.message);
        res.status(500).json({ success: false, message: "Internal server error..."});
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({ success: false, message: "Product ID invalid..."});
    }

    try {
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            res.status(500).json({ success: false, message: "Product ID not found..."});
        }

        await Product.findByIdAndUpdate(id, product, {new: true, runValidators: true});
        res.status(200).json({ success: true, message: "Product updated sucessfully..."});
    }
    catch (error) {
        console.log("Error, while updating product: ", error.message);
        res.status(500).json({ success: false, message: "Internal server error..."});
    }

};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({ success: false, message: "Product ID invalid..."});
    }

    try {
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            res.status(500).json({ success: false, message: "Product ID not found..."});
        }

        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully..."});
    }
    catch (error) {
        console.log("Error, while deleting product: ", error.message);
        res.status(500).json({ success: false, message: "Internal server error..."});
    }
};