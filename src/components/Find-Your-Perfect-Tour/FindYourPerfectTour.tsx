import React from 'react'
import SectionHeaderText from '../SectionHeaderText/SectionHeaderText';
import TravelCard from '../Travel-card/TravelCard';
import cardImage from "../../assets/images/discoverGrease.jpg"

const FindYourPerfectTour: React.FC = () => {
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
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="p-2 pl-6 sm:pl-0 md:p-4">
                        <TravelCard
                            cardImage={cardImage}
                            title="Discover Greece"
                            price="$1250"
                            ratingText="6.3 Good"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet voluptatem vitae aut euism maximus et justo consequ dolor sit amet consectetur adipisicing elit. Nisi amet voluptatem vitae aut euism maximus et justo consequ"
                            duration="12 Days"
                            guests="12 guests"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FindYourPerfectTour