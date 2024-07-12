import cardImage from "@/assets/images/discoverGrease.jpg";
import TravelCard from "@/components/Travel-card/TravelCard";
import Container from "@/components/Container/Container";
import HomeCarousel from "@/components/home-carousel/homeCarousel";
import { CarouselItem } from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Container>
        <TravelCard
          cardImage={cardImage}
          title="Discover Greece"
          price="$1250"
          ratingText="6.3 Good"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet voluptatem vitae aut euism maximus et justo consequ dolor sit amet consectetur adipisicing elit. Nisi amet voluptatem vitae aut euism maximus et justo consequ"
          duration="12 Days"
          guests="12 guests"
          className="m-4"
        />
        <div className="flex justify-center items-center">
          <HomeCarousel />
        </div>
      </Container>
    </main>
  );
}
