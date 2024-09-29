"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

interface ReviewsCarouselProps {
    children: React.ReactNode;
}

export default function ReviewsCarousel({ children }: ReviewsCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', loop: true })
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(true)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)

        return () => {
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="flex flex-col h-full">
            <div ref={emblaRef} className="overflow-hidden flex-grow">
                <Carousel>
                    <CarouselContent className="-mt-1">
                        {children}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="flex justify-center mt-2 space-x-2 pb-2">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white"
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white"
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}