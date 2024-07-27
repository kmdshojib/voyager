import React from 'react';
import { MdStarRate } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

interface ReviewCardProps {
  title: string;
  rating: number;
  description: string;
  user: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ title, rating, description, user }) => {
  return (
    <div className="mt-3">
      <h1 className="text-2xl text-gray-500">{title}</h1>
      <div className="my-2 flex">
        {Array.from({ length: rating }, (_, index) => (
          <MdStarRate key={index} size={16} className="text-rose-500" />
        ))}
      </div>
      <p className="text-sm mb-2 text-gray-500">{description}</p>
      <div className="flex">
        <FaUserCircle size={24} className="mr-3" />
        <span>{user}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
