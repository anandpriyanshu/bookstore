import React from 'react'
import Book from '../assets/images/books/book7.jpg'

const WeekOfBook = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-gray-400 via-gray-700 to-gray-400 flex flex-col justify-center items-center p-8'>

                <div className=' flex items-center justify-center '>
                    <img src={Book} className='w-32 object-cover rounded-sm' />
                </div>
                <div className='text-white text-center '>
                    <h2 className='text-xl font-bold mt-2 '>Book of the week</h2>
                    <p className='text-sm mt-2'>"Garden"</p>
                    <p className='italic mt-2'>By Adeline</p>

                </div>
            </div>
        </>
    )
}

export default WeekOfBook