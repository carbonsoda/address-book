import dotenv from 'dotenv';
import pgp from 'pg-promise';


dotenv.config({ path: "./.env" });

const db = pgp()({
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    host: "localhost",
    port: "5432"
})



