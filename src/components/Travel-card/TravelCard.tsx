import { FC } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { CiFaceSmile, CiUser } from "react-icons/ci";
import { IoMdRefresh } from "react-icons/io";

interface TravelCardProps {
  cardImage: string | StaticImageData;
  title: string;
  price: string;
  ratingText: string;
  description: string;
  duration: string;
  guests: string;
  className?: string;
  [x: string]: any;
}

const TravelCard: FC<TravelCardProps> = ({
  cardImage,
  title,
  price,
  ratingText,
  description,
  duration,
  guests,
  className,
  ...props
}) => {
  return (
    <Card className={cn("w-60 md:w-72", className)} {...props}>
      <Image src={cardImage} alt="cardImage" height={200} width={200} className="rounded-t-sm w-full" />
      <div className="m-3">
        <div className="mb-3 flex justify-between">
          <CardTitle className="cursor-pointer hover:text-rose-500">
            {title}
          </CardTitle>
          <CardTitle className="text-[#40c1b9] font-bold">{price}</CardTitle>
        </div>
        <div className="flex">
          <span className="mt-0.5">
            <CiFaceSmile />
          </span>
          <CardDescription className="ml-3">{ratingText}</CardDescription>
        </div>
        <CardDescription className="mt-3 line-clamp-2 mb-2">
          {description}
        </CardDescription>
        <hr />
        <div className="flex m-2">
          <div className="flex mr-3">
            <IoMdRefresh className="text-gray-500 mt-0.5" />
            <CardDescription>{duration}</CardDescription>
          </div>
          <div className="flex">
            <CiUser className="text-gray-500 mt-0.5" />
            <CardDescription>{guests}</CardDescription>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TravelCard;
