"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useAutoplay from "@/hooks/useAutoPlay"

interface HomeCarouselProps {
  children: React.ReactNode
}

export default function HomeCarousel({ children }: HomeCarouselProps) {
  const plugin = useAutoplay()

  return (
    <div className="relative w-full max-w-[330px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {children}
        </CarouselContent>
        <div className="hidden md:d-block absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full pointer-events-none">
          <CarouselPrevious className="absolute left-0 -translate-x-full pointer-events-auto" />
          <CarouselNext className="absolute right-0 translate-x-full pointer-events-auto" />
        </div>
      </Carousel>
    </div>
  )
}