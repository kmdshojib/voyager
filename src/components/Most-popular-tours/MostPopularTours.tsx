import React from 'react'
import HomeCarousel from '../home-carousel/homeCarousel'
import { CarouselItem } from '../ui/carousel'
import TravelCard from '../Travel-card/TravelCard'
import SectionHeaderText from '../SectionHeaderText/SectionHeaderText'

const MostPopularTours: React.FC = async () => {
    const baseURL = process.env.baseUrl
    const data = await fetch(`${baseURL}popular-tours`)
    const tours = await data.json()
    // console.log(tours.data)
    return (
        <div>
            <SectionHeaderText
                header='Most Popular Tours'
                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit iste optio maiores placeat deserunt'
            />
            <div className="mb-3">
                <HomeCarousel>
                    {tours.data &&
                        tours.data.map((tour: any) => (
                            <CarouselItem
                                key={tour._id}
                                className="px-1 md:px-2 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="sm:pl-0 md:p-4 mx-auto w-max">
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
                            </CarouselItem>
                        ))
                    }
                </HomeCarousel>
            </div>
        </div>
    )
}

export default MostPopularTours