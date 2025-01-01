import express, { json } from 'express';

const app = express();
const PORT = 4000;

app.use(json());

app.use('/api', (req, res) => {
    res.send('Hi');
})

app.listen(PORT, console.log(`Server started at ${PORT}`));