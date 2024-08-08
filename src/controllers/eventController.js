import Event from '../models/Event.js';

export const trackEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(200).send('Event tracked');
    } catch (err) {
        res.status(500).send('Server error');
    }
};
