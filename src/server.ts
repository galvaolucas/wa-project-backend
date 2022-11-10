import 'reflect-metadata';
import mongoose from 'mongoose';
import config from './database/config';
import dotenv from 'dotenv';
import app from './app';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
}

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(config.mongo.url, config.mongo.options).then(() => {
    console.log('Connected to mongo!');

    app.get('/', (req, res) => {
        return res.json({ message: `API Running in ${process.env.NODE_ENV}!` });
    })

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

    app.listen(process.env.PORT || 3333, () => {
        console.log(`Server Running in ${process.env.NODE_ENV}!`);
    });

    }).catch((error) => {
        console.log('error', error);
    });
}



