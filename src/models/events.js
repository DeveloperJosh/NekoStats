import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    type: { type: String, required: true },
    data: { type: mongoose.Mixed, required: true },
    timestamp: { type: Date, default: Date.now },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
