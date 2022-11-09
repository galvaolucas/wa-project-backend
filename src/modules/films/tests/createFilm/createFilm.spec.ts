import mongoose from 'mongoose';
import request from 'supertest';
import dotenv from 'dotenv';
import config from '../../../../database/config';
import app from '../../../../app';

const mongo_options = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: true,
};

const mongo_username = process.env.DB_USER;
const mongo_password = process.env.DB_PASS;
const mongo_host = process.env.DB_HOST;

const mongo = {
    host: mongo_host,
    username: mongo_username,
    password: mongo_password,
    options: mongo_options,
    url: String(process.env.DB_CONNECT_TEST),
};

beforeEach( async () => {
    await mongoose.connect(mongo.url, config.mongo.options).then(() => {
        console.log('Connected to mongo!');
    }).catch((error) => {
        console.log('error', error);
    });
})

afterEach( async () => {
    await mongoose.connection.close();
})

describe('POST /Films', () => {
    it('Should be possible to create a new film in the database', async () => {
        const res = await request(app)
        .post('/films')
        .send({ 
            movie_banner: 'www.google.com',
            title: 'Filme do Lucas',
            description: 'Um ótimo filme',
            director: 'Lucas',
            producer: 'Lucas'
         })
        .set('Accept', 'application/json')
        
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Filme do Lucas');
    })
})

