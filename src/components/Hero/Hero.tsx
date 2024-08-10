import React from 'react'
import HeroCarousel from './HeroCarousel'
import "./hero.css"
const Hero = () => {
    return (
        <section className="bg-gray-100 overflow-hidden h-[450px]">
            <HeroCarousel />
        </section>
    )
}

export default Hero