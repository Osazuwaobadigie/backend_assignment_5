import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/users.route.js";
import articleRoute from "./routes/article.route.js"


dotenv.config();

const app = express();
const MONGO_URL = process.env.Mongo_URL;
const PORT = process.env.PORT;
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/article", articleRoute);

app.get("/",  (req, res) => {
    res.jsonp({message: "Hello world"});
});

app.all("*", (req, res) => {
    res.status(404);
    res.json({
        message: "Not found",
    });
});


mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
});