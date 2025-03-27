import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema(
    
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "signup",
            required: true,
        },
        },

        {
            timestamps: true,
        },
);

const cartProduct = mongoose.model("cart-products",cartProductSchema);

export default cartProduct;