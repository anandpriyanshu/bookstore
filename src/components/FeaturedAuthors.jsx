import React from 'react'
import { Authors } from '../data'
const FeaturedAuthors = () => {
    return (
        <>
            <h1 className='text-4xl font-bold text-center my-8'>Feature Authors</h1>
            <div className='flex justify-around text-center'>

                {
                    Authors.map((ele, i) => (
                        <div className=''>
                            <img src={ele.profile_image} alt={ele.name} className='w-36 h-36 rounded-lg mb-4 mx-auto' />
                            <h5 className='font-bold'>{ele.name}</h5>
                        </div>
                    ))
                }


            </div>
        </>
    )
}

export default FeaturedAuthors