import mongoose from 'mongoose';
import config from '../config/default.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(config.db);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};
