import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CiFaceSmile, CiUser } from "react-icons/ci"
import { IoMdRefresh } from "react-icons/io"

interface TravelCardProps {
  cardImage: string
  title: string
  price: string
  ratingText: string
  description: string
  duration: string
  guests: string
  id: string
  className?: string
}

const TravelCard: FC<TravelCardProps> = ({
  cardImage,
  title,
  price,
  ratingText,
  description,
  duration,
  guests,
  id,
  className,
}) => {
  return (
    <Card className={cn("w-full max-w-sm overflow-hidden", className)}>
      <div className="relative h-48 w-full">
        <Image
          src={cardImage}
          alt={`${title} tour`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-lg">
            <Link href={`tours/${id}`} className="hover:text-primary transition-colors">
              {title}
            </Link>
          </CardTitle>
          <span className="text-xl font-bold text-primary">{price}</span>
        </div>
        <div className="flex items-center mb-2">
          <CiFaceSmile className="text-yellow-400 mr-1" aria-hidden="true" />
          <CardDescription>{ratingText}</CardDescription>
        </div>
        <CardDescription className="mb-3 line-clamp-2">{description}</CardDescription>
        <hr className="mb-3" />
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <IoMdRefresh className="mr-1" aria-hidden="true" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <CiUser className="mr-1" aria-hidden="true" />
            <span>{guests}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TravelCard