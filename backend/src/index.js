import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // for using env variables

const app = express(); // initialized express app
const PORT = process.env.PORT_NUMBER;


// Using json parser
app.use(express.json());

// Routes 
app.use('/api', (req, res) => {
    res.send('Hi');
})

// Server started at
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
});