import express from 'express';
import cors from 'cors';
import * as db from './db.mjs';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})


app.get('/contacts', async (req, res) => {
    db.getContacts().then(contacts => res.json(contacts));
})

app.post('/contacts', async (req, res) => {
    const body = req.body;
    const contact = await db.addContact(body)
        .catch(e => console.error(e.stack));
    
    if (contact) {
        res.status(201).json(contact);
    }

    res.status(400).json({error: 'Phone number already exists'});
})
