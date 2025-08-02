import mongoose from "mongoose";
// Connect to MongoDB using Mongoose
const connectDB = async () => {
    try {
        const connected = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connected.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
    }
}

export default connectDB;