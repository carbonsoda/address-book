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
    db.getContacts()
        .then(contacts => res.json(contacts))
        .catch(e => console.error(e.stack));
})

app.post('/contacts', async (req, res) => {
    const body = req.body;

    const exists = await db.checkPhone(body.phone_number)
        .catch(e => console.error(e.stack));
    
    if (exists) {
        return res.status(404).send({ error: 'Phone number already exists' });
    } else {
        await db.addContact(body)
            .then(contact =>
                res.status(201).json(contact))
            .catch(e => console.error(e.stack));
    }

})


app.delete('/contacts/:id', async (req, res) => {
    const id = req.params.id;

    db.deleteContact(id)
        .then(() => res.status(204).send('Contact deleted successfully'))
        .catch(e => console.error(e.stack));
})
