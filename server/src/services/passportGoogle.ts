import passport, { Profile } from 'passport';
import pool from '../config/db';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { findOrCreateNewUser } from '../models/user.model';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';

passport.serializeUser((user: any, done: Function) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done: Function) => {
  const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  done(null, result.rows[0]);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: Function,
    ) => {
      const user = await findOrCreateNewUser(
        profile.id,
        profile.emails?.[0]?.value ?? '',
        profile.displayName,
      );

      return done(null, user);
    },
  ),
);
