'use client'

import React, { useState } from 'react'
import SectionHeaderText from '../SectionHeaderText/SectionHeaderText'
import { useTourCategoryQuery } from '@/lib/services/tourService'
import TravelCard from '../Travel-card/TravelCard'
import TravelCardSkeleton from '../Travel-card/TravelCardSkelliton'

interface Tour {
    _id: string
    image: string
    name: string
    price: string
    rating: string
    description: string
    duration: string
    guests: string
}

export default function FindYourPerfectTour() {
    const [category, setCategory] = useState<string>("All")
    const { isLoading, isFetching, data } = useTourCategoryQuery(category)

    const categories = ["All", "luxury", "budget friendly", "recommended"]

    return (
        <div className='my-5'>
            <SectionHeaderText
                header='Find Your Perfect Tour'
                text='Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. In sed viverra dui. Suspendisse laoreet velit at eros eleifend.'
            />
            <div className='my-5'>
                <ul className='flex justify-center gap-3'>
                    {categories.map((cat) => (
                        <li
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`cursor-pointer ${category === cat ? 'text-rose-500 font-semibold' : 'hover:text-rose-500 hover:font-semibold'}`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='grid place-items-center grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4'>
                {isLoading || isFetching ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="p-2 pl-6 sm:pl-0 md:p-4">
                            <TravelCardSkeleton />
                        </div>
                    ))
                ) : (
                    data && data.data.map((tour: Tour) => (
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
                    ))
                )}
            </div>
        </div>
    )
}