import Event from '../models/events.js';

export const trackEvent = async (req, res) => {
    try {
        const { type, data, duration, location, metadata } = req.body;
        const event = new Event({ type, data, duration, location, metadata });
        await event.save();
        res.status(200).send('Event tracked');
    } catch (err) {
        res.status(500).send('Server error');
    }
};

export const getEvents = async (req, res) => {
    const { range } = req.query;

    // Determine the date range
    let dateFrom;
    switch (range) {
        case '24h':
            dateFrom = new Date(Date.now() - 24 * 60 * 60 * 1000); // Last 24 hours
            break;
        case '7d':
            dateFrom = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // Last 7 days
            break;
        default:
            dateFrom = new Date(0); // All time
    }

    try {
        const events = await Event.find({ timestamp: { $gte: dateFrom } }).sort({ timestamp: -1 });
        res.json(events);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
