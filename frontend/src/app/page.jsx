"use client";

// React imports
import { useState } from "react";

// Dependency - DATE FNS
import { format } from "date-fns";

// Icon Library imports 
import { Minus, User, Add, Calendar2, Clock } from "iconsax-react";

// Calendar Component
import Calendar from "@/components/Calendar ";
import axios from "axios";

const primaryColor = "#F92E43";

// Time Slot Array
const slots = [
  {
    label: "6:00 PM",
    value: "6:00 PM",
    isAvailable: true,
  },
  {
    label: "7:00 PM",
    value: "7:00 PM",
    isAvailable: true,
  },
  {
    label: "8:00 PM",
    value: "8:00 PM",
    isAvailable: false,
  },
  {
    label: "9:00 PM",
    value: "9:00 PM",
    isAvailable: false,
  },
  {
    label: "10:00 PM",
    value: "10:00 PM",
    isAvailable: false,
  },
]

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [guestCount, setGuestCount] = useState(1);

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    timeSlot: "",
    guestCount: 1
  });

  // Function to handle time slot
  const handleSelectedSlot = (slotIndex) => {
    if (selectedSlot === slotIndex) {
      setSelectedSlot(null);
      setFormData(prev => ({ ...prev, timeSlot: "" }));
    } else {
      setSelectedSlot(slotIndex);
      setFormData(prev => ({ ...prev, timeSlot: slots[slotIndex].value }));
    }
  }

  // Function to reduce guests
  const reduceGuestCount = () => {
    if (guestCount > 1) {
      setGuestCount(prev => prev - 1);
      setFormData(prev => ({ ...prev, guestCount: prev.guestCount - 1 }));
    }
  }

  // Function to increase guests
  const increaseGuestCount = () => {
    setGuestCount(prev => prev + 1);
    setFormData(prev => ({ ...prev, guestCount: prev.guestCount + 1 }));
  }

  const handleSubmitBooking = async () => {
    const userFullName = `${formData.firstName} ${formData.lastName}`.trim();

    const bookingData = {
      name: userFullName,
      guestsCount: formData.guestCount,
      bookingDate: format(currentDate, 'dd LLLL yyyy'),
      bookingSlot: formData.timeSlot,
    };

    try {
      const response = await axios.post('http://localhost:3001/api/booking/add', bookingData);
      const responseData = response.data;
      console.log(responseData);
    } catch (error) {
      console.log("Error creating booking : ", error.message);
    }
  }

  return (
    <div className="w-full px-5 lg:px-0 lg:py-16 md:w-[500px] md:mx-auto">
      {/* Calendar */}
      <div className="flex w-full justify-between">
        <Calendar
          value={currentDate}
          onChange={(date) => {
            setCurrentDate(date);
            setFormData(prev => ({ ...prev, date: format(date, 'dd LLLL yyyy') }));
          }}
        />
      </div>

      {/* Booking form */}
      <div className="mt-9 p-6 grid gap-6 w-full lg:w-[500px] border-[1.5px] border-strokes rounded-3xl">
        {/* Booking Date */}
        {currentDate && (
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-3">
            <div className="flex items-center gap-x-2">
              <Calendar2 size={24} color={primaryColor} />
              <label className="text-lg font-semibold">Booking date : </label>
            </div>
            <p className="text-lg">{format(currentDate, 'dd LLLL yyyy')}</p>
          </div>
        )}

        {/* Separator */}
        <hr className="w-full" />

        {/* Guest Details */}
        <div className="grid gap-y-3">
          <div className="flex items-center gap-x-3">
            <User size={24} color={primaryColor} />
            <label className="text-lg font-semibold">Guest details</label>
          </div>
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-4 w-full">
            <input
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              className="h-[60px] px-5 w-full md:w-1/2 rounded-2xl border-[1.5px] outline-primary border-strokes"
              placeholder="First name"
              required
            />
            <input
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              className="h-[60px] px-5 w-full md:w-1/2 rounded-2xl border-[1.5px] outline-primary border-strokes"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        {/* Separator */}
        <hr className="w-full" />

        {/* Time Slot */}
        <div className="grid gap-y-3">
          <div className="flex items-center gap-x-3">
            <Clock size={24} color={primaryColor} />
            <label className="text-lg font-semibold">Select time slot</label>
          </div>
          <div className="flex gap-4 flex-wrap">
            {slots.map((slot, index) => (
              <div
                onClick={() => handleSelectedSlot(index)}
                key={index}
                className={`cursor-pointer ${index === selectedSlot ? 'bg-primary text-white border-none lg:hover:bg-primary/90' : 'border-[1.5px] border-strokes lg:hover:bg-tile'} w-[125px] flex items-center justify-center px-6 py-3 rounded-xl`}
              >
                <h1>{slot.label}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <hr className="w-full" />

        {/* Guest Counts */}
        <div className="flex items-center gap-x-6">
          <label className="text-lg font-semibold">Guest count : </label>
          <div className="flex items-center gap-x-6">
            <div onClick={reduceGuestCount} className="cursor-pointer h-fit w-fit flex items-center justify-center bg-tile p-1.5 rounded-full">
              <Minus size={16} color={primaryColor} />
            </div>
            <p className="text-lg font-semibold">{guestCount}</p>
            <div onClick={increaseGuestCount} className="cursor-pointer h-fit w-fit flex items-center justify-center bg-primary p-1.5 rounded-full">
              <Add size={16} color="#FFFFFF" />
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="w-full" />

        {/* Submit Button */}
        <button onClick={handleSubmitBooking} className="h-[60px] rounded-xl bg-primary text-white lg:hover:bg-primary/90">Book your table</button>
      </div>
    </div>
  );
}


