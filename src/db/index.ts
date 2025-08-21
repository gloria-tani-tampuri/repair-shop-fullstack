import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

// Load environment variables
config({path: '.env.local'});

// Create neon client
const sql = neon(process.env.DATABASE_URL!);

// Create drizzle instance
const db = drizzle(sql,{logger: true});

export {db}