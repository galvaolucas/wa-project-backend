import { Router } from 'express';
import FilmsController from '../../controller/FilmsController';

const filmsRouter = Router();

filmsRouter.get('/', FilmsController.getFilms);
filmsRouter.post('/', FilmsController.postFilms);
filmsRouter.delete('/:id', FilmsController.deleteFilm);
filmsRouter.delete('/', FilmsController.deleteCollection);

export default filmsRouter;