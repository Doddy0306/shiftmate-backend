import express from 'express';
import cors from 'cors';
import handoverRoutes from './routes/handover.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/handovers', handoverRoutes);

app.listen(3001, () => console.log('Server running on port 3001'));