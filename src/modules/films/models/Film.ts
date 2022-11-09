import mongoose, { Schema } from "mongoose";
import IFilm from "../interfaces/FilmDTO";

const FilmSchema: Schema = new mongoose.Schema({
    movie_banner: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    director: {
        type: String,
        require: true,
    },
    producer: {
        type: String,
        require: true,
    },
},
{ timestamps: true },
)

const Film = mongoose.model<IFilm>('Film', FilmSchema);

export default Film;