import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import './services/passportGoogle';
import authRouter from './routes/authRoutes';
import initDB from './schema';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(authRouter);

const startServer = async () => {
  await initDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
