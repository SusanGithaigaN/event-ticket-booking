import React from 'react'
import Button from './Button'

export default function NoTickets() {
const btn= [
    {label:"Get a ticket", href:"/", variant:"primary"}
]
    return (
        <div className='flex justify-center items-center h-screen bg-[#02191D] py-4'>
            <div className='flex flex-col space-y-4'>
                <p className='text-red-500'>Sorry, no ticket(s) found.</p>
                {/* <div className='text-gray-200 bg-[#24A0B5] hover:bg-[#6ad0e2]'>
                    <a href='/events' target='_blank' className='text-center'></a>
                </div> */}
                <Button buttons={btn}  />
            </div>
        </div>
    )
}
