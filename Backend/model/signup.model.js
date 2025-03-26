import mongoose from "mongoose";

const signupSchema = new mongoose.Schema(

    {
        Username: {
            type: String,
            required: [true, "Please provide username"],
            unique: [true, "Username exists"]
        },
        Password: {
            type: String,
            required: [true, "Please provide password"],
            unique: false,
        },
        Type: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }

);

const signup = new mongoose.model("Signup", signupSchema);

export default signup;