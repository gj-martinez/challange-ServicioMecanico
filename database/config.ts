import { config } from "dotenv";
config();

export default {
    DB_NAME: process.env.DB_NAME || 'db_name' ,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USERNAME: process.env.DB_USERNAME || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '1234',

};