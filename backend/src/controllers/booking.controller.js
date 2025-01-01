import Booking from '../models/booking.model.js'

export const createBookings = async (req, res) => {
    const { name: guestName, guestsCount, bookingDate, bookingSlot } = req.body;
    
    try {
        const newBooking = new Booking({
            name: guestName, 
            guestsCount: guestsCount, 
            bookingDate: bookingDate, 
            bookingSlot: bookingSlot
        })

        newBooking.save();

        res.status(201).json(newBooking);
    } catch (error) {
        console.log('Error creating a booking : ', error.message);
        res.status(500).json({message: 'Internal server error!'});
    }
}

export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();

        if (bookings.length === 0) {
            res.status(200).json({message : 'No bookings found'});
        } else res.status(200).json(bookings);
    } catch (error) {
        console.log('Error fetching bookings', )
    }
}

export const deleteBooking = async (req, res) => {
    const { id:bookingId } = req.params;

    try {
        await Booking.deleteOne({_id: bookingId });
        
        res.status(202).json({message: `Booking ${bookingId} deleted!`});
    } catch (error) {
        console.log('Error deleting the booking : ', error.message);
        res.status(500).json({message: 'Internal server error!'});
    }
}
