'use client'

import React, { useState } from 'react'
import TourNavigation from '@/components/TourNavigation/TourNavigation'
import TourDetails from '@/components/TourDetailes/TourDetails'
import TourTimeLine from '@/components/TourTimeLine/TourTimeLine'

type TourContentProps = {
    data?: any
}

export default function TourContent({ data }: TourContentProps) {
    const [activeSection, setActiveSection] = useState('Information')

    return (
        <>
            <TourNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
            {activeSection === 'Information' && <TourDetails />}
            {activeSection === 'Tour Plan' && <TourTimeLine data={data} />}
            {/* Add other sections as needed */}
        </>
    )
}