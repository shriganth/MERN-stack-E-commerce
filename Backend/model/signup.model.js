import mongoose from "mongoose";

const signupSchema = new mongoose.Schema(

    {
        Username: {
            type: String,
            required: true,
        },
        Password: {
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