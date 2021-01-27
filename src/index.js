import express from 'express';
import cors from 'cors';

const app = express();
const port = 8040;

// cors : entete "Access-Control-Allow-Origin"
app.use(cors());

app.get('/', (req, res) => {
    const json = {
        nom: 'vanackere',
        prenom: 'jeremy',
        date: '27/01/2021'
    }
    res.send(JSON.stringify(json));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})