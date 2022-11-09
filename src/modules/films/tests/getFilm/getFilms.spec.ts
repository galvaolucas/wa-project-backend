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

describe('GET /Films', () => {
    it('Should be possible to get a new film to the API', async () => {
        const res = await request(app).get('/films');
        expect(res.statusCode).toBe(200);
        expect(res.body.films.length).toBeGreaterThan(0);
    })
})
