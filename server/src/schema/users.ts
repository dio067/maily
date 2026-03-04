import pool from '../config/db';

const createUsersTable = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
         id SERIAL PRIMARY KEY,
         google_id VARCHAR(255) UNIQUE NOT NULL,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         created_at TIMESTAMP DEFAULT NOW()
        )`);
};

export default createUsersTable;
