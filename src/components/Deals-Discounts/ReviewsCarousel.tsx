"use client"
import React, { FC } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import useAutoplay from '@/hooks/useAutoPlay'

interface ReviewsCarouselProps {
    children: React.ReactNode;
}
const ReviewsCarousel: FC<ReviewsCarouselProps> = ({ children }) => {
    const plugin = useAutoplay(5000, true);

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            plugins={[plugin.current]}
            orientation="vertical"
            className="w-full max-w-xs"
        >
            <CarouselContent className="-mt-1 h-72">
                {
                    children
                }
            </CarouselContent>
        </Carousel>
    )
}

export default ReviewsCarousel