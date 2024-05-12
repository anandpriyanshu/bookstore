
import React from 'react'
import { FeatureBooks } from '../data.js'

const FeaturedBooks = () => {
    return (
        <div className='mx-20 my-10'>
            <h1 className='text-xl font-bold mb-5'>Featured Books</h1>
            <swiper-container slides-per-view="4" enabled="true" navigation="true">
                {
                    FeatureBooks.map((book, i) => (
                        <swiper-slide>
                            <div className='flex flex-col items-center my-5'>
                                <a href={book.id}>
                                    <img src={book.book_cover} alt={book.title} width="180px" />
                                </a>
                                <p className='font-semibold my-5'>Rs. {book.selling_price} <span className='line-through font-bold text-sm text-red-600'>{book.mrp}</span> </p>
                            </div>
                        </swiper-slide>
                    ))
                }
            </swiper-container>
        </div>
    )
}

export default FeaturedBooks
