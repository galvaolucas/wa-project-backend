import { Request, Response } from 'express';
import Film from '../models/Film';

const FilmsController = {
    async getFilms (req: Request, res: Response): Promise<Response> {

        const { skip, limit } = req.query;

        const totalFilms = await Film.find().count();

        const films = await Film.find().skip(Number(skip)).limit(Number(limit));

        const data = {
            films: films,
            total: totalFilms,
        }

        return res.json(data);
    },

    async getFilmById (req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const film = await Film.find({ 
            _id: id, 
        });

        if (!film) {
            throw new Error('No film was found with the given id!')
        }

        return res.json(film);
    },

    async postFilms (req: Request, res: Response): Promise<Response> {

        const { movie_banner, title, description, producer, director  } = req.body;

        const film = await Film.create({ movie_banner, title, description, producer, director });

        return res.json(film);
    },

    async deleteFilm (req: Request, res: Response): Promise<Response> {

        const { id  } = req.params;

        await Film.findOneAndDelete({ _id: id }).then(() => {
            return res.status(200).json({ message: 'Item deleted! '});
        })

        return res.status(400);
    },

    async deleteCollection (req: Request, res: Response): Promise<Response> {

        await Film.deleteMany({}).then(() => {
            return res.status(200).json({ message: 'Database deleted! '});
        });
        
        return res.status(400);
    },
}

export default FilmsController;