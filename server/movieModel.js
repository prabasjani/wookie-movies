import mongoose from "mongoose";

const movieSchema = mongoose.Schema({});

export const movieModel = mongoose.model("movies", movieSchema);
