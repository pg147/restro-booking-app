import express from 'express';

const router = express.Router();

// To create a booking
router.post('/booking/add', (req, res) => {
    res.send('You can book from here!');
})

// To fetch bookings
router.get('/bookings', (req, res) => {
    res.send('Your bookings would be viewed here!');
})

// To update a booking
router.put('/booking/update/:id', (req, res) => {
    res.send('You would be able to edit booking from here!');
})

// To delete a booking
router.delete('/booking/:id', (req, res) => {
    res.send('This booking would be deleted!');
})

export default router;