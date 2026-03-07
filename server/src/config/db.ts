import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env?.DATABASE_URL ?? '',
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on('connect', () => {
  console.log('Connected To Database');
});

pool.on('error', () => {
  console.error('Could not Connect to Database');
});

export default pool;
