import React from 'react'
import { Suspense } from 'react'
import { CarouselItem } from '@/components/ui/carousel'
import SectionHeaderText from '../SectionHeaderText/SectionHeaderText'
import HomeCarousel from '../home-carousel/homeCarousel'
import TravelCard from '../Travel-card/TravelCard'
import { fetchData } from '@/hooks/fetchData'

async function fetchTours() {
  const baseURL = process.env.baseUrl

  const res = await fetch(`${baseURL}popular-tours`, { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('Failed to fetch tours')
  return res.json()
}

export default function MostPopularTours() {
  return (
    <div className="container mx-auto px-4">
      <SectionHeaderText
        header='Most Popular Tours'
        text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit iste optio maiores placeat deserunt'
      />
      <Suspense fallback={<div>Loading tours...</div>}>
        <ToursCarousel />
      </Suspense>
    </div>
  )
}

async function ToursCarousel() {
  // const tours = await fetchTours()
  const tours = await fetchData("popular-tours")
  return (
    <HomeCarousel>
      {tours?.data?.map((tour: any) => (
        <CarouselItem
          key={tour._id}
          className="sm:px-2 md:px-4 md:basis-2/4 lg:basis-1/3 "
        >
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
        </CarouselItem>
      ))}
    </HomeCarousel>
  )
}