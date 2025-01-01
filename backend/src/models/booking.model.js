import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        guestsCount: {
            type: Number,
            required: true
        },
        bookingDate: {
            type: Date,
            required: true
        },
        bookingSlot: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export const Booking = new mongoose.model("booking", schema); 