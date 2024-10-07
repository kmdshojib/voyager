"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import AutoplayPlugin from "embla-carousel-autoplay"
import { type EmblaPluginType } from "embla-carousel"

interface HomeCarouselProps {
  children: React.ReactNode
}

export default function HomeCarousel({ children }: HomeCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const plugin = React.useRef<EmblaPluginType>(
    AutoplayPlugin({ delay: 5000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) return

    api.on("pointerDown", () => {
      const autoplay: any = plugin.current
      if (autoplay) autoplay.stop()
    })

    api.on("pointerUp", () => {
      const autoplay: any = plugin.current
      if (autoplay) autoplay.reset()
    })
  }, [api])

  return (
    <div className="relative w-full max-w-[330px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Carousel
        className="w-full"
        plugins={[plugin.current] as any}
        setApi={setApi}
      >
        <CarouselContent className="-ml-4">
          {children}
        </CarouselContent>
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full pointer-events-none">
          <CarouselPrevious className="absolute left-0 -translate-x-full pointer-events-auto" />
          <CarouselNext className="absolute right-0 translate-x-full pointer-events-auto" />
        </div>
      </Carousel>
    </div>
  )
}