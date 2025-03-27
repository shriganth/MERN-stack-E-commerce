import signup from "../model/signup.model.js";

export const createUser = async (req, res) => {
    const { username, password, type } = req.body;

    const existingUser = await signup.findOne({username});
    if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
    }

    const newUser = new signup({ username, password, type });
    try {
        await newUser.save();
        res.status(200).json({ success: true, message: "Data created successfully..." });
    } catch (error) {
        console.log("Error, while creating data...", error.message);
        res.status(500).json({ success: false, message: "Internal server error..." });
    }
}