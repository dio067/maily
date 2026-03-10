import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import cookieSession from 'cookie-session';
import passport from 'passport';
import './services/passportGoogle';
import authRouter from './routes/authRoutes';
import initDB from './schema';

const PORT = process.env.PORT || 5000;
const COOKIE_KEY = process.env.COOKIE_KY || '';

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [COOKIE_KEY],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRouter);

const startServer = async () => {
  await initDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
