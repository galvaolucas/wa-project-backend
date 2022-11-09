import dotenv from 'dotenv';

dotenv.config();

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
    url: String(process.env.DB_CONNECT),
};

const config = {
    mongo: mongo,
}

export default config;
