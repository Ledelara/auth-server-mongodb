import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';  // Importe o CORS
import authRoutes from './routes/authRoutes';
import { connectToDatabase } from './config/database';

dotenv.config();

const app = express();

// Configuração do CORS
app.use(cors({
    origin: "http://localhost:3000/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

connectToDatabase();

export default app;
