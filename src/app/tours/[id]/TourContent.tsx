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

    return (
        <div className="flex mt-5 justify-between flex-col md:flex-row">
            <div>
                <TourNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
                {activeSection === 'Information' && <TourDetails data={data} />}
                {activeSection === 'Tour Plan' && <TourTimeLine data={data} />}
                {activeSection === 'Reviews' && <TourReview />}
                {/* Add other sections as needed */}
            </div>
            <div className="mb-2">
                <TourBookingForm />
            </div>
        </div>
    )
}