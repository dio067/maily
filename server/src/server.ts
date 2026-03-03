import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
