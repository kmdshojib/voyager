"use client"

import React, { useState, useCallback } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { motion, AnimatePresence } from 'framer-motion'
import useAutoplay from '@/hooks/useAutoPlay'
import { type CarouselApi } from '@/components/ui/carousel'

const carouselItems = [
    {
        image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        subtitle: "Multipurpose Theme",
        title: "The journey not the arrival matters."
    },
    {
        image: "https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        subtitle: "Multipurpose Theme",
        title: "Not all those who wander are lost."
    },
    {
        image: "https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        subtitle: "Multipurpose Theme",
        title: "Wander often, wonder always."
    }
]

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [api, setApi] = useState<CarouselApi>()
    const autoplay = useAutoplay(4000, false, {
        stopOnMouseEnter: true,
        playOnInit: true
    });

    const handleSlideChange = useCallback(() => {
        if (!api) return
        setCurrentIndex(api.selectedScrollSnap())
    }, [api])

    React.useEffect(() => {
        if (!api) return
        api.on('select', handleSlideChange)
        return () => {
            api.off('select', handleSlideChange)
        }
    }, [api, handleSlideChange])

    return (
        <div className="relative w-full h-[450px] overflow-hidden">
            <Carousel
                plugins={[autoplay.createAutoplayPlugin()] as any}
                className="w-full h-full"
                setApi={setApi}
            >
                <CarouselContent>
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index} className="relative w-full h-[450px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40" />
                            <AnimatePresence initial={false} mode="wait">
                                {currentIndex === index && (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center text-white"
                                    >
                                        <motion.span
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.6 }}
                                            className="text-lg md:text-2xl text-slate-200 mb-2 font-light"
                                        >
                                            {item.subtitle}
                                        </motion.span>
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4, duration: 0.6 }}
                                            className="text-3xl md:text-5xl font-bold text-center max-w-3xl px-4 leading-tight"
                                        >
                                            {item.title}
                                        </motion.h2>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ delay: 0.6, duration: 0.6 }}
                                            className="w-24 h-1 bg-white mt-6"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default HeroCarousel