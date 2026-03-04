import pool from '../config/db';

const createUsersTable = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
         id SERIAL PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         created_at TIMESTAMP DFAULT NOW()
        )`);
};

export default createUsersTable;
