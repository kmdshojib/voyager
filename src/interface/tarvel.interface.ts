import mongoose from "mongoose";

interface TourPlan {
    day: number;
    title: string;
    description: string;
}

export interface Review {
    user: string;
    rating: number;
    comment?: string;
    date: Date;
}

export interface ITravel {
    name: string;
    title: string;
    image: string;
    price: number;
    category: string;
    rating?: number;
    description: string;
    duration: string;
    guests: number;
    details: string;
    departurePlace: string;
    departureTime: string;
    ageGroup: string;
    tourPlan?: TourPlan[];
    reviews?: Review[];
    createdBy: mongoose.Schema.Types.ObjectId;
}