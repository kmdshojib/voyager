import { Review } from "./tarvel.interface";

export interface IUser {
    name: string;
    email: string;
    password?: string;
    avatar?: string;
    refreshToken?: string;
    socialAuthentication?: boolean;
    reviews?: Review[];
}