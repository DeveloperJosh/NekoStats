import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './utils/database.js';
import eventRoutes from './routes/eventRoutes.js';
import config from './config/default.js';

const app = express();

app.use(bodyParser.json());

// Connect to database
connectDB();

// Use routes
app.use('/api', eventRoutes);

// Start server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
