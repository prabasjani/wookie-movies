import { movieModel } from "./movieModel.js";

export const movieCategories = async (req, res) => {
  const actionMovies = await movieModel.aggregate([
    { $match: { genres: "Action" } },
  ]);
  const animationMovies = await movieModel.aggregate([
    { $match: { genres: "Animation" } },
  ]);
  const crimeMovies = await movieModel.aggregate([
    { $match: { genres: "Crime" } },
  ]);
  const dramaMovies = await movieModel.aggregate([
    { $match: { genres: "Drama" } },
  ]);
  const adventureMovies = await movieModel.aggregate([
    { $match: { genres: "Adventure" } },
  ]);
  const familyMovies = await movieModel.aggregate([
    { $match: { genres: "Adventure" } },
  ]);
  const biographyMovies = await movieModel.aggregate([
    { $match: { genres: "Biography" } },
  ]);
  const historyMovies = await movieModel.aggregate([
    { $match: { genres: "History" } },
  ]);
  const mysteryMovies = await movieModel.aggregate([
    { $match: { genres: "Mystery" } },
  ]);
  const sciFiMovies = await movieModel.aggregate([
    { $match: { genres: "Sci-Fi" } },
  ]);
  const romanceMovies = await movieModel.aggregate([
    { $match: { genres: "Romance" } },
  ]);
  const thrillerMovies = await movieModel.aggregate([
    { $match: { genres: "Thriller" } },
  ]);
  const warMovies = await movieModel.aggregate([{ $match: { genres: "War" } }]);

  res.status(200).send([
    { category: "Action", movies: actionMovies },
    { category: "Adventure", movies: adventureMovies },
    { category: "Animation", movies: animationMovies },
    { category: "Biography", movies: biographyMovies },
    { category: "Crime", movies: crimeMovies },
    { category: "Drama", movies: dramaMovies },
    { category: "Family", movies: familyMovies },
    { category: "History", movies: historyMovies },
    { category: "Mystery", movies: mysteryMovies },
    { category: "Romance", movies: romanceMovies },
    { category: "Sci-Fi", movies: sciFiMovies },
    { category: "Thriller", movies: thrillerMovies },
    { category: "War", movies: warMovies },
  ]);
};
