import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    type: { type: String, required: true },
    data: { type: mongoose.Mixed, required: true },
    timestamp: { type: Date, default: Date.now },
    duration: { type: Number, required: false }, 
    location: { type: String, required: false } 
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
