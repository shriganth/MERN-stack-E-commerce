import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";
// import Product from "./model/product.model.js";
import cartProductRoute from "./routes/cart-product.route.js";
import userRoute from "./routes/signup.route.js";

dotenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/product", productRoute);

app.use("/api/cart", cartProductRoute)

app.use("/api/user", userRoute);

// console.log(process.env.MONGO_URI);

console.log( __dirname);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/Frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
	});
}

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})