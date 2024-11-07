import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";


console.log('TMDB_API_KEY:', ENV_VARS.TMDB_API_KEY);
console.log(process.env.TMDB_API_KEY);
console.log(process.env.MONGO_URI);
console.log('ENV_VARS.TMDB_API_KEY:', ENV_VARS.TMDB_API_KEY);
console.log('MONGO_URI:', ENV_VARS.MONGO_URI);


export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
		console.log("MongoDB connected: " + conn.connection.host);
	} catch (error) {
		console.error("Error connecting to MONGODB: " + error.message);
		process.exit(1);
	}
};
