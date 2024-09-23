import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectDb = async () => {
    if (isConnected) {
        console.log("Database connection is already established.");
        return;
    }

    try {
        const mongoUri = process.env.NODE_ENV === "production"
            ? process.env.MONGO_URI_Production!
            : process.env.MONGO_URI!;
        await mongoose.connect(mongoUri);

        isConnected = true;
        console.log("Connection established with the database.");

    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Rethrow to be handled in the calling function
    }
};
