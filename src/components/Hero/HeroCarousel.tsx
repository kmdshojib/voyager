"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import useAutoplay from '@/hooks/useAutoPlay'
import { motion } from 'framer-motion'

const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const transitionDuration = 0.5; // Duration of the transition in seconds

const HeroCarousel = () => {
    const plugin = useAutoplay(5000);

    return (
        <div className="relative w-full ">
            <Carousel plugins={[plugin.current]} className="w-full h-full">
                <CarouselContent>
                    <CarouselItem>
                        <div className="bg-[url('https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] w-full h-[450px] bg-no-repeat bg-cover relative">
                            {/* title */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={titleVariants}
                                transition={{ duration: transitionDuration, ease: "easeOut" }}
                                className='absolute inset-0 flex items-center justify-center'
                            >
                                <div className='text-xl md:text-3xl text-white font-bold text-center relative font-mono'>
                                    <span className='text-lg md:text-2xl text-slate-200'>Multipurpose Theme</span><br />
                                    The journey not the arrival matters.
                                </div>
                            </motion.div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="bg-[url('https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] w-full h-[450px] bg-no-repeat bg-cover relative">
                            {/* title */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={titleVariants}
                                transition={{ duration: transitionDuration, ease: "easeOut" }}
                                className='absolute inset-0 flex items-center justify-center'
                            >
                                <div className='text-xl md:text-3xl text-white font-bold text-center relative font-mono'>
                                    <span className='text-lg md:text-2xl text-slate-200'>Multipurpose Theme</span><br />
                                    Not all those who wander are lost.
                                </div>
                            </motion.div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="bg-[url('https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] w-full h-[450px] bg-no-repeat bg-cover relative">
                            {/* title */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={titleVariants}
                                transition={{ duration: transitionDuration, ease: "easeOut" }}
                                className='absolute inset-0 flex items-center justify-center'
                            >
                                <div className='text-xl md:text-3xl text-white font-bold text-center relative font-mono'>
                                    <span className='text-lg md:text-2xl text-slate-200'>Multipurpose Theme</span><br />
                                    Wander often, wonder always.
                                </div>
                            </motion.div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default HeroCarousel
