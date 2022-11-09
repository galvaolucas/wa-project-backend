import { Router } from 'express';
import filmsRouter from '../../../modules/films/routes/http/films.routes';

const routes = Router();

routes.get('/', function(req, res) {
    res.json({
      health: 'OK'
    }) 
});

routes.use('/films', filmsRouter)

export default routes;
