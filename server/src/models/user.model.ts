import pool from '../config/db';

export const findOrCreateNewUser = async (
  googleId: string, // It might be number ( Used string for general cases)
  email: string,
  name: string,
) => {
  const existing = await pool.query(
    `SELECT * FROM users WHERE google_id = $1`,
    [googleId],
  );

  if (existing.rows.length > 0) return existing.rows[0];

  const newUser = await pool.query(
    `INSERT INTO users(google_id, email, name) values($1, $2, $3) RETURNING *`,
    [googleId, email, name],
  );

  return newUser.rows[0];
};
