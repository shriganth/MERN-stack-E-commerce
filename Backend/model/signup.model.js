import mongoose from "mongoose";

const signupSchema = new mongoose.Schema(

    {
        username: {
            type: String,
            required: [true, "Please provide username"],
            unique: [true, "Username exists"]
        },
        password: {
            type: String,
            required: [true, "Please provide password"],
            unique: false,
            minlength: 6,
        },
        type: {
            type: String,
            required: true,
        },
        cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "cartProduct",
            required: true,
        }
    },
    {
        timestamps: true,
    }

);

const signup = new mongoose.model("Signup", signupSchema);

export default signup;