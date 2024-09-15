"use client"
import React, { useState } from 'react'
import SectionHeaderText from '../SectionHeaderText/SectionHeaderText';
import TravelCard from '../Travel-card/TravelCard';
import { useTourCategoryQuery } from '@/lib/services/tourService';

const FindYourPerfectTour: React.FC = () => {

    const [category, setCategory] = useState<string>("All");
    const { isLoading, isFetching, data } = useTourCategoryQuery(category)
    console.log(data)

    return (
        <div className='my-5'>
            <SectionHeaderText
                header='Find Your Perfect Tour'
                text='Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. In sed viverra dui. Suspendisse laoreet velit at eros eleifend.'
            />
            {/* categories */}
            <div className='my-5'>
                <ul className='flex justify-center gap-3'>
                    <li onClick={() => setCategory("All")} className='cursor-pointer text-rose-500 font-semibold'>All</li>
                    <li onClick={() => setCategory("luxery")} className='cursor-pointer hover:text-rose-500 hover:font-semibold'>Luxery</li>
                    <li onClick={() => setCategory("budeget friendly")} className='cursor-pointer hover:text-rose-500 hover:font-semibold'>Budeget Friendly</li>
                    <li onClick={() => setCategory("recomended")} className='cursor-pointer hover:text-rose-500 hover:font-semibold'>Recomended</li>
                </ul>
            </div>
            {
                isLoading || isFetching ? <div>Loading...</div> : <>
                    {
                        data && <div className='grid place-items-center grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
                            {data.data.map((tour: any) => (
                                <div key={tour._id} className="p-2 pl-6 sm:pl-0 md:p-4">
                                    <TravelCard
                                        id={tour._id}
                                        cardImage={tour.image}
                                        title={tour.name}
                                        price={tour.price}
                                        ratingText={tour.rating}
                                        description={tour.description}
                                        duration={tour.duration}
                                        guests={tour.guests}
                                    />
                                </div>
                            ))}
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default FindYourPerfectTour