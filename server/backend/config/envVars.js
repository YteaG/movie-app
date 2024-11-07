import dotenv from "dotenv";

dotenv.config({ path: './.env' });
// console.log('TMDB_API_KEY:', ENV_VARS.TMDB_API_KEY);
console.log(process.env.TMDB_API_KEY);
// console.log('ENV_VARS.TMDB_API_KEY:', ENV_VARS.TMDB_API_KEY);


export const ENV_VARS = {
	MONGO_URI: process.env.MONGO_URI,
	PORT: process.env.PORT || 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: process.env.TMDB_API_KEY,
	CHECK: process.env.CHECK,
};

console.log(ENV_VARS);