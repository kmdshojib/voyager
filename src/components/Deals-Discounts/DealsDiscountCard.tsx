import React from 'react';
import { CiFaceSmile, CiMoneyCheck1 } from 'react-icons/ci';
import { FcGlobe } from 'react-icons/fc';
import Image, { StaticImageData } from 'next/image';

interface DealsDiscountCardProps {
    imageSrc: string | StaticImageData;
    altText: string;
    price: number;
    originalPrice: number;
    title: string;
    description: string;
}

const DealsDiscountCard: React.FC<DealsDiscountCardProps> = ({ imageSrc, altText, price, originalPrice, title, description }) => {
    return (
        <div className="deals-discount w-64 h-64 rounded-md relative group overflow-hidden">
            <Image alt={altText} src={imageSrc} className="w-full h-full rounded-md group-hover:blur-[2px]" />
            <div className="hidden group-hover:flex absolute inset-0 p-5 flex-col justify-between z-50">
                <div>
                    <div className="flex justify-between w-full">
                        <div className="flex text-white text-sm font-bold">
                            <span className="mt-1 pr-2">
                                <CiFaceSmile />
                            </span>
                            Superb
                        </div>
                        <p className="text-white text-sm font-bold">${price}</p>
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-white text-sm font-bold">{title}</p>
                        <p className="text-white text-sm font-bold line-through">${originalPrice}</p>
                    </div>
                    <div className="text-sm mt-2 text-white">
                        {description}
                    </div>
                </div>
                <div className="flex items-end mt-5">
                    <CiMoneyCheck1 className="mr-3" size={24} color="white" />
                    <FcGlobe size={24} />
                </div>
            </div>
            <div className="p-5 h-full flex flex-col justify-end items-start group-hover:hidden absolute inset-0">
                <div className="flex justify-between w-full">
                    <div className="flex text-white text-sm font-bold">
                        <span className="mt-1 pr-2">
                            <CiFaceSmile />
                        </span>
                        Superb
                    </div>
                    <p className="text-white text-sm font-bold">${price}</p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-white text-sm font-bold">{title}</p>
                    <p className="text-white text-sm font-bold line-through">${originalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default DealsDiscountCard;
