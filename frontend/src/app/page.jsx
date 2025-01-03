"use client";

import Calendar from "@/components/Calendar ";
import YourBookings from "@/components/YourBookings ";
import { Minus, User, Add } from "iconsax-react";
import { useState } from "react";

const primaryColor = "#F92E43";

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

  const handleSelectedSlot = (slotIndex) => {
    if (selectedSlot === slotIndex) {
      setSelectedSlot(null);
    } else setSelectedSlot(slotIndex);
  }

  const reduceGuestCount = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  }

  const increaseGuestCount = () => setGuestCount(guestCount + 1);

  return (
    <div className="w-full px-5 lg:px-0 lg:w-[500px] lg:mx-auto">
      {/* Your bookings */}
      <div className="flex w-full justify-between">
        {/* Calendar */}
        <Calendar value={currentDate} onChange={setCurrentDate} />
      </div>
      <div className="mt-9 grid gap-6 w-full lg:w-[500px]">
        <div className="relative">
          <input className="h-[60px] pl-14 w-full rounded-2xl border-[1.5px] outline-primary border-strokes" placeholder="Enter your full name" />
          <User className="absolute mx-5 inset-0 h-full my-auto" size={20} color={primaryColor} />
        </div>

        <div className="flex gap-4 flex-wrap">
          {slots.map((slots, index) => (
            <div onClick={() => handleSelectedSlot(index)} key={index} className={`cursor-pointer ${index === selectedSlot ? 'bg-primary text-white border-none lg:hover:bg-primary/90' : 'border-[1.5px] border-strokes lg:hover:bg-strokes/40'} w-[125px] flex items-center justify-center px-6 py-3 rounded-xl`}>
              <h1>{slots.label}</h1>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-x-3">
          <h1>Guest count : </h1>
          <div className="flex items-center gap-x-6">
            <div onClick={reduceGuestCount} className="cursor-pointer h-fit w-fit flex items-center justify-center bg-strokes p-1.5 rounded-full">
              <Minus size={16} color={primaryColor} />
            </div>
            <p className="text-lg font-semibold">{guestCount}</p>
            <div onClick={increaseGuestCount} className="cursor-pointer h-fit w-fit flex items-center justify-center bg-primary p-1.5 rounded-full">
              <Add size={16} color="#FFFFFF" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
