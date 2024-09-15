import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectDb = async () => {
    if (isConnected) {
        console.log("Database connection is already established.");
        return;
    }

    try {
        // No need for useNewUrlParser or useUnifiedTopology in Mongoose v6+
        await mongoose.connect(process.env.MONGO_URI!);

        const connection = mongoose.connection;
        connection.once("connected", () => {
            console.log("Connection established with the database.");
            isConnected = true; // Mark as connected
        });

        connection.on("error", (err) => {
            console.error("Connection error:", err);
            process.exit(1); // Exit the process in case of connection error
        });
    } catch (error) {
        console.error("Something went wrong while connecting to the database:", error);
        throw error; // Throw the error to handle it in the calling function
    }
};
