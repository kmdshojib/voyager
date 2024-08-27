import React from 'react';
import DealsDiscountCard from './DealsDiscountCard';
import tourImage from "../../assets/images/tour-image-2.jpg";
import { StaticImageData } from 'next/image';
import { CarouselItem } from '../ui/carousel';
import ReviewsCarousel from './ReviewsCarousel';
import ReviewCard from './ReviewCard';

interface Deal {
    imageSrc: string | StaticImageData;
    altText: string;
    price: number;
    originalPrice: number;
    title: string;
    description: string;
}

const DealsDiscount: React.FC = () => {
    const deals: Deal[] = [
        {
            imageSrc: tourImage,
            altText: 'Tour Image 1',
            price: 450,
            originalPrice: 500,
            title: 'Valley Of the Kings',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error ipsum cumque...'
        },
        {
            imageSrc: tourImage,
            altText: 'Tour Image 2',
            price: 400,
            originalPrice: 450,
            title: 'Pyramids of Giza',
            description: 'Explore the ancient wonders of the Pyramids...'
        },
        {
            imageSrc: tourImage,
            altText: 'Tour Image 2',
            price: 400,
            originalPrice: 450,
            title: 'Pyramids of Giza',
            description: 'Explore the ancient wonders of the Pyramids...'
        },
        // Add more deals here
    ];
    const dummyData = [
        {
            title: 'Pyramids of Giza',
            rating: 5,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis delectus necessitatibus vel suscipit sed nostrum, ab nam? Fuga eveniet a earum ipsam ea? Odio voluptatibus perspiciatis amet. Natus, sit labore.',
            user: 'Robert',
        },
        {
            title: 'Great Wall of China',
            rating: 4,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti.',
            user: 'Alice',
        },
        // Add more dummy data as needed
    ];
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className='mr-3'>
                <div className='my-3 text-center'>
                    <h1 className='text-3xl my-3'>Deals & Discounts</h1>
                    <p className='text-gray-400 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti temporibus hic natus rerum facere odit soluta sint aliquam maxime rem, non, tenetur omnis quasi cupiditate veritatis itaque numquam incidunt?</p>
                </div>
                <div className='flex gap-4 flex-col items-center md:flex-row my-3'>
                    {deals.map((deal, index) => (
                        <DealsDiscountCard
                            key={index}
                            imageSrc={deal.imageSrc}
                            altText={deal.altText}
                            price={deal.price}
                            originalPrice={deal.originalPrice}
                            title={deal.title}
                            description={deal.description}
                        />
                    ))}
                </div>
            </div>
            {/* top reviews */}
            <div className='border-[0.01px] border-gray-300 w-full md:w-3/4 lg:w-2/5 my-3 rounded-sm shadow-sm h-80 overflow-hidden self-center '>
                <div className='m-5'>
                    <h1 className='text-2xl mb-3'>Top Reviews</h1>
                    <hr />
                    {/* reviews */}
                    <ReviewsCarousel>
                        {dummyData.map((data, index) => (
                            <CarouselItem key={index}>
                                <ReviewCard
                                    title={data.title}
                                    rating={data.rating}
                                    description={data.description}
                                    user={data.user}
                                />
                            </CarouselItem>
                        ))}
                    </ReviewsCarousel>
                </div>
            </div>
        </div>
    );
};

export default DealsDiscount;
