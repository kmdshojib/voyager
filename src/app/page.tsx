import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import cardImage from "@/assets/images/discoverGrease.jpg";
import { CiFaceSmile } from "react-icons/ci";
import { IoMdRefresh } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import TravelCard from "@/components/Travel-card/TravelCard";

type CardProps = React.ComponentProps<typeof Card>;

export default function Home({ className, ...props }: CardProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TravelCard
        cardImage={cardImage}
        title="Discover Greece"
        price="$1250"
        ratingText="6.3 Good"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet voluptatem vitae aut..."
        duration="12 Days"
        guests="12 guests"
        className="m-4"
      />
    </main>
  );
}
