
export interface IReview {
    user: string;
    email: string;
    ratings: {
        accommodation: number;
        destination: number;
        meals: number;
        transport: number;
        valueForMoney: number;
        overall: number;
    };
    comment?: string;
    date: Date;
}
