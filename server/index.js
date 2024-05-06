import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { movieModel } from "./movieModel.js";
import allMovies from "./routes/movieRoutes.js";
import { movieCategories } from "./movieController.js";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());
// mongodb conn
mongoose.connect(process.env.MONGO_DB_URI);

// GET API
app.use("/", allMovies);

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
