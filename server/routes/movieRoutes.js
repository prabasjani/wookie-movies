import express from "express";
import { movieModel } from "../movieModel.js";
import { movieCategories } from "../movieController.js";

const router = express.Router();

router.get("/allmovies", async (req, res) => {
  const movies = await movieModel.find();
  res.json(movies);
});

router.get("/movies", movieCategories);

export default router;
