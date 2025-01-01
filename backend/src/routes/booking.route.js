import express from 'express';
import { createBookings, deleteBooking, getBookings } from '../controllers/booking.controller.js';

const router = express.Router();

// To create a booking
router.post('/booking/add', createBookings);

// To fetch bookings
router.get('/bookings', getBookings);

// To update a booking
router.put('/booking/update/:id', (req, res) => {
    res.send('You would be able to edit booking from here!');
})

// To delete a booking
router.post('/booking/delete/:id', deleteBooking );

export default router;