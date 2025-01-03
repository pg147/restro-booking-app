import React from 'react'
import { Clock, People } from 'iconsax-react'

const primaryColor = '#F92E43'

export default function YourBookings() {
    return (
        <div className='grid h-fit w-fit p-4'>
            {/* Title */}
            <div className='flex items-center gap-x-3'>
                <div className={`h-fit w-fit p-1.5 rounded-full bg-primary/20`}>
                    <Clock className={`h-5 w-5 text-primary`} color={primaryColor} />
                </div>
                <h1 className='font-medium'>Your bookings</h1>
            </div>

            <hr className='w-full my-5 bg-strokes' />

            {/* Bookings */}
            <div className='flex gap-x-3'>
                {/* Date */}
                <div className='h-[70px] w-[70px] flex flex-col justify-center rounded-lg border-[1.75px]'>
                    <h1 className='font-medium text-sm text-subtitle text-center'>Tue</h1>
                    <p className='text-xl font-bold text-center'>27</p>
                </div>
                {/* Details */}
                <div className='h-full grid'>
                    <h1 className='font-semibold text-lg'>Prathmesh Gaidhane</h1>
                    <hr className='w-full bg-strokes' />
                    <div className='flex items-center gap-x-6 font-medium'>
                        <div className='flex items-center gap-x-2'>
                            <People size={16} color={primaryColor} />
                            <p className='text-subtitle'>4</p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <Clock size={16} color={primaryColor} />
                            <p className='text-subtitle'>9:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
