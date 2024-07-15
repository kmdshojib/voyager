"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface HomeCarouselProps {
  children: React.ReactNode;
}
const HomeCarousel: React.FC<HomeCarouselProps> = ({ children }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-[330px] md:max-w-2xl lg:max-w-5xl"
    >
      <CarouselContent className="ml-0">{children}</CarouselContent>
      <div className="flex justify-between mt-2 md:mt-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};
export default HomeCarousel;
