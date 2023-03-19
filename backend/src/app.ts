import cors from 'cors';
import express from 'express';
import path from 'path';
import roomRoutes from './room/roomRoutes';
import userRoutes from './user/userRoutes';

const app = express();

app.use(express.json());
// Serve static files from the build folder
app.use(express.static(path.join(__dirname, '../../build')));
app.use(cors({
    origin: 'http://localhost:3001'
}))
// Set up middleware

app.use('/api/user', userRoutes);
app.use('/api/room', roomRoutes);

export default app;