"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import cardImage from "@/assets/images/discoverGrease.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TravelCard from "../Travel-card/TravelCard";
interface HomeCarouselProps {
  children: React.ReactNode;
}
const HomeCarousel: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel className="max-w-sm md:max-w-5xl">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <TravelCard
                cardImage={cardImage}
                title="Discover Greece"
                price="$1250"
                ratingText="6.3 Good"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet voluptatem vitae aut euism maximus et justo consequ dolor sit amet consectetur adipisicing elit. Nisi amet voluptatem vitae aut euism maximus et justo consequ"
                duration="12 Days"
                guests="12 guests"
                
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="ml-3">
        <CarouselPrevious />
      </div>
      <div className="mr-3">
        <CarouselNext />
      </div>
    </Carousel>
  );
};
export default HomeCarousel;
