export interface ITravel {
    name: string,
    image: string,
    price: number,
    rating?: Array<number>,
    description: string,
    duration: string,
    guests: number,
}