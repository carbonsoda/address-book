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

