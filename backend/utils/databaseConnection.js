import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

export default function DatabaseConnection() {

    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('database connection successfully !')

    } catch (error) {
        console.log("🚀 ~ file: DatabaseConnection.js:12 ~ error:", error);

    }

}
