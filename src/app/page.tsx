import Container from "@/components/Container/Container";
import MostPopularTours from "@/components/Most-popular-tours/MostPopularTours";
import FindYourPerfectTour from "@/components/Find-Your-Perfect-Tour/FindYourPerfectTour";
import DealsDiscount from "@/components/Deals-Discounts/DealsDiscount";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <div className="bg-[#F9F9F9]">
        <Hero />
      </div>
      {/* why this content is overflowing in hero */}
      <div className="bg-[#F9F9F9] flex">
        <Container className="pt-5">
          <MostPopularTours />
        </Container>
      </div>
      <div className="bg-white my-5">
        <Container>
          <DealsDiscount />
        </Container>
      </div>
      <div id="tours" className="bg-[#F9F9F9] flex">
        <Container>
          <FindYourPerfectTour />
        </Container>
      </div>
    </main>
  );
}
