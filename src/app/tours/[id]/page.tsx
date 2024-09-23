import React from 'react'
import Container from '@/components/Container/Container'
import TourTimeLine from '@/components/TourTimeLine/TourTimeLine'
import TourDetails from '@/components/TourDetailes/TourDetails'
import TourNavigation from '@/components/TourNavigation/TourNavigation'
import TourContent from './TourContent'
import { fetchData } from '@/hooks/fetchData'
import TourHeroSection from '@/components/TourDetailes/TourHeroSection'
import TourBookingForm from '@/components/TourBookingFrom/TourBookingForm'

const Page = async ({ params }: { params: { id: string } }) => {
    const cleanId = decodeURIComponent(params.id)
    const tour = await fetchData(`get-single-tour/${cleanId}`)
    return (
        <div>
            <TourHeroSection title={tour.name} url={tour.image} />
            <Container>
                <TourContent data={tour} />
                
            </Container>
        </div>
    )
}

export default Page