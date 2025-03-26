import mongoose from "mongoose";

const signinSchema = new mongoose.Schema(

    {
        Username: {
            type: String,
            required: true,
        },
        Password: {
            type: String,
            required: true,
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

const signin = new mongoose.model("Signin", signinSchema);

export default signin;