import React from 'react';
import DealsDiscountCard from './DealsDiscountCard';
import tourImage from "../../assets/images/tour-image-2.jpg";
import { StaticImageData } from 'next/image';

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
        // Add more deals here
    ];

    return (
        <div className='flex flex-col'>
            <div>
                <h1 className='text-2xl'>Deals & Discounts</h1>
                <p className='text-gray-400 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti temporibus hic natus rerum facere odit soluta sint aliquam maxime rem, non, tenetur omnis quasi cupiditate veritatis itaque numquam incidunt?</p>
            </div>
            <div className='flex flex-wrap gap-4'>
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
    );
};

export default DealsDiscount;
