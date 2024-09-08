import React from 'react'
import SectionHeaderText from '../SectionHeaderText/SectionHeaderText';
import TravelCard from '../Travel-card/TravelCard';

const FindYourPerfectTour: React.FC = async () => {
    const baseURL = process.env.baseUrl
    const data = await fetch(`${baseURL}getTour`)
    const tours = await data.json()
    return (
        <div className='my-5'>
            <SectionHeaderText
                header='Find Your Perfect Tour'
                text='Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. In sed viverra dui. Suspendisse laoreet velit at eros eleifend.'
            />
            {/* categories */}
            <div className='my-5'>
                <ul className='flex justify-center gap-3'>
                    <li className='cursor-pointer text-rose-500 font-semibold'>All</li>
                    <li className='cursor-pointer hover:text-rose-500 hover:font-semibold'>Luxery</li>
                    <li className='cursor-pointer hover:text-rose-500 hover:font-semibold'>Budeget Friendly</li>
                    <li className='cursor-pointer hover:text-rose-500 hover:font-semibold'>Recomended</li>
                </ul>
            </div>
            <div className='grid place-items-center grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
                {tours.data.map((tour:any) => (
                    <div key={tour._id} className="p-2 pl-6 sm:pl-0 md:p-4">
                        <TravelCard
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
        </div>
    )
}

export default FindYourPerfectTour