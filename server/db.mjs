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

export const getContacts = async () => (
    await db.any('SELECT * FROM contacts')
);

// add
export const addContact = async (body) => (
    await db.oneOrNone('INSERT INTO contacts'
        + ' (first_name, last_name, phone_number, email) VALUES '
        + ' (${first_name}, ${last_name}, ${phone_number}, ${email})'
        + ' ON CONFLICT DO NOTHING',
        body
    )
)

