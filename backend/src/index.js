// Dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Libs
import { connectDB } from './lib/db.js';

// Routers
import bookingRoutes from './routes/booking.route.js';

dotenv.config(); // for using env variables

const app = express(); // initialized express app
const PORT = process.env.PORT_NUMBER;

// Using json parser
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
}))

// Routes 
app.use('/api', bookingRoutes);

// Server 
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    connectDB();
});