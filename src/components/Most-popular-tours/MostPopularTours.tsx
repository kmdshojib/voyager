import React from 'react'
import HomeCarousel from '../home-carousel/homeCarousel'
import { CarouselItem } from '../ui/carousel'
import TravelCard from '../Travel-card/TravelCard'
import cardImage from "../../assets/images/discoverGrease.jpg"
import SectionHeaderText from '../SectionHeaderText/SectionHeaderText'
const MostPopularTours: React.FC = () => {
    return (
        <div>
            <SectionHeaderText
                header='Most Popular Tours'
                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit iste optio maiores placeat deserunt'
            />
            <div className="mb-3">
                <HomeCarousel>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="px-1 md:px-2 md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="sm:pl-0 md:p-4 mx-auto w-max">
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

                        </CarouselItem>
                    ))}
                </HomeCarousel>
            </div>
        </div>
    )
}

export default MostPopularTours