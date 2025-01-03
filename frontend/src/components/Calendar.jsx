"use client"

// React Imports
import { useState } from "react";

// Dependency - DATE Fns 
import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub } from "date-fns";

// Cell Component
import Cell from "./Cell";

// Week days array
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar ({ value = new Date(), onChange }) {
    const [isActiveIndex, setIsActiveIndex] = useState(null);

    const startDate = startOfMonth(value); // returns date for 1st Day of the month
    const endDate = endOfMonth(value);  // returns date for Last Day of the month

    const numofDays = differenceInDays(endDate, startDate) + 1;
    const daysTillStart = startDate.getDay();  // returns index of current day

    // Functions for updating months
    const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));
    const nextMonth = () => onChange && onChange(add(value, { months: 1 }));

    // Functions for updating years
    const prevYear = () => onChange && onChange(sub(value, { years: 1 }));
    const nextYear = () => onChange && onChange(add(value, { years: 1 }));

    // Function to setDate 
    const handleSetDate = (dayOfMonth, index) => {
        setIsActiveIndex(index);
        const date = setDate(value, dayOfMonth);
        return onChange && onChange(date);
    };

    return (
        <div className="h-fit w-[500px] flex flex-col items-center border p-4 rounded-3xl">
            {/* User Controls and Current Month */}
            <div className="w-full grid grid-cols-7 items-center justify-around">
                {/* Change to Previous Year */}
                <Cell onClick={prevYear}>{"<<"}</Cell>

                {/* Change to Previous Month */}
                <Cell onClick={prevMonth} className="text-primary">{"<"}</Cell>

                {/* Current month & year */}
                <Cell className="col-span-3 pointer-events-none text-base lg:text-lg ">{format(value, 'LLLL yyyy')}</Cell>

                {/* Change to Next Month */}
                <Cell onClick={nextMonth} className="text-primary">{">"}</Cell>

                {/* Change to Next Year */}
                <Cell onClick={nextYear}>{">>"}</Cell>
            </div>

            {/* Separator */}
            <div className="px-4 w-full my-4">
                <hr className="w-full" />
            </div>

            {/* Row - Week Day Headers */}
            <div className="h-fit w-full grid grid-cols-7 pointer-events-none text-sm">
                {weekDays.map((days, index) => (
                    <Cell className="font-semibold" key={index}>{days}</Cell>
                ))}
            </div>

            {/* Row - Days */}
            <div className="h-fit w-full grid grid-cols-7 gap-y-1 mt-2 mb-2 lg:mt-4 lg:mb-2 items-center justify-center font-regular text-sm">
                {/* For empty cells of daysTillStart */}
                {Array.from({ length: daysTillStart }).map((_, index) => {
                    return <Cell key={index} />
                })}

                {/* Actual days */}
                {Array.from({ length: numofDays }).map((_, index) => {
                    const date = index + 1;

                    return <Cell className={`p-0 h-8 w-8 lg:h-10 lg:w-10 px-3 py-2 flex items-center justify-center ${(isActiveIndex === index) ? 'pointer-events-none bg-primary text-center mx-auto text-white' : ''}`} onClick={() => handleSetDate(date, index)} key={index}>{date}</Cell>
                })}
            </div>
        </div>
    )
}
