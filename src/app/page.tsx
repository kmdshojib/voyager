import Container from "@/components/Container/Container";
import MostPopularTours from "@/components/Most-popular-tours/MostPopularTours";
import FindYourPerfectTour from "@/components/Find-Your-Perfect-Tour/FindYourPerfectTour";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <div className="bg-[#F9F9F9] flex">
        <Container>
          <MostPopularTours />
        </Container>
      </div>
      <div className="bg-[#F9F9F9] flex">
        <Container>
          <FindYourPerfectTour />
        </Container>
      </div>
    </main>
  );
}
