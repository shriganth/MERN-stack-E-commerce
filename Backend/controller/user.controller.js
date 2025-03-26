import signup from "../model/signup.model";

export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new signup(user);
    try {
        await newUser.save();
        res.status(200).json({ success: true, message: "Data created successfully..." });
    } catch (error) {
        console.log("Error, while creating data...", error.message);
        res.status(500).json({ success: false, message: "Internal server error..." });
    }
}