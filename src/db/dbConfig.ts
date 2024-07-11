import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Connection established with db ")
        })
        connection.on("error", (err) => {
            console.log("Connection error", err);
            process.exit(1);
        })
    } catch (error) {
        console.log("Something went wrong while connecting to DB", error);
    }
}
