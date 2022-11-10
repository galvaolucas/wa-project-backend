import { Router } from 'express';
import FilmsController from '../../controller/FilmsController';

const filmsRouter = Router();

filmsRouter.post('/', FilmsController.postFilms);

filmsRouter.get('/:id', FilmsController.getFilmById);
filmsRouter.get('/', FilmsController.getFilms);

filmsRouter.delete('/:id', FilmsController.deleteFilm);
filmsRouter.delete('/', FilmsController.deleteCollection);

export default filmsRouter;