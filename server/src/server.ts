import express from 'express';
import './services/passportGoogle';
import authRouter from './routes/authRoutes';
import initDB from './schema';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(authRouter);

app.listen(PORT, async () => {
  await initDB();
  console.log(`Server is running on port ${PORT}`);
});
