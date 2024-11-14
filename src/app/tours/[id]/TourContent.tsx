'use client'

import React, { useState } from 'react'
import TourNavigation from '@/components/TourNavigation/TourNavigation'
import TourDetails from '@/components/TourDetailes/TourDetails'
import TourTimeLine from '@/components/TourTimeLine/TourTimeLine'
import TourBookingForm from '@/components/TourBookingFrom/TourBookingForm'
import TourReview from '@/components/Tour-reviews/TourReview'


type TourContentProps = {
    data?: any
}

export default function TourContent({ data }: TourContentProps) {
    const [activeSection, setActiveSection] = useState('Information')

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'Information':
                return <TourDetails data={data} />
            case 'Tour Plan':
                return <TourTimeLine data={data} />
            // case 'Location':
            //     return <TourLocation data={data} />
            // case 'Gallery':
            //     return <TourGallery data={data} />
            case 'Reviews':
                return <TourReview />
            default:
                return null
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <TourNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
                    <div className="mt-6">
                        {renderActiveSection()}
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <TourBookingForm data={data}/>
                </div>
            </div>
        </div>
    )
}