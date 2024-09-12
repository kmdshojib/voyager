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
    image: string;
    price: number;
    category: string;
    rating?: number;        // Average rating calculated from reviews
    description: string;
    duration: string;
    guests: number;
    tourPlan?: TourPlan[];
    reviews?: Review[];     
    createdBy: mongoose.Schema.Types.ObjectId; 
}