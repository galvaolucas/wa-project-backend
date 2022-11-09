import { Document } from 'mongoose';

export default interface IFilm extends Document {
    _id: string;
    movie_banner: string;
    title: string;
    description: string;
    director: string;
    producer: string;
}