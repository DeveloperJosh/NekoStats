import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './utils/database.js';
import eventRoutes from './routes/eventRoutes.js';
import config from './config/default.js';
import cors from 'cors';

const app = express();
app.use(cors());

// log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.use(bodyParser.json());
app.use('/api', eventRoutes);

connectDB();

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
