import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes';
import { connectToDatabase } from './config/database';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

connectToDatabase();

export default app;