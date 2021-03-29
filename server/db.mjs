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
    await db.any('SELECT * FROM contacts'
    + ' ORDER BY id DESC')
);

// add
export const addContact = async (body) => (
    await db.one('INSERT INTO contacts'
        + ' (first_name, last_name, phone_number, email) VALUES '
        + ' (${first_name}, ${last_name}, ${phone_number}, ${email})'
        + ' RETURNING *',
        body
    )
)

export const checkPhone = async (phone) => (
    await db.oneOrNone('SELECT * FROM contacts'
        + ' WHERE phone_number = $1', [phone])
)

// delete
export const deleteContact = async (id) => (
    await db.none(
        'DELETE FROM contacts WHERE id = $1',
        [id]
    )
);
