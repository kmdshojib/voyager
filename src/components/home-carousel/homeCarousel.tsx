"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useAutoplay from "@/hooks/useAutoPlay";
interface HomeCarouselProps {
  children: React.ReactNode;
}
const HomeCarousel: React.FC<HomeCarouselProps> = ({ children }) => {
  const plugin = useAutoplay();

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-[330px] md:max-w-xl lg:max-w-5xl"
    >
      <CarouselContent className="ml-0">{children}</CarouselContent>
      <div className="hidden md:flex justify-between mt-2 md:mt-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};
export default HomeCarousel;
