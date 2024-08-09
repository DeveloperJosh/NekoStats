import express from 'express';
import { trackEvent, getEvents } from '../controllers/eventController.js';

const router = express.Router();

router.post('/track', trackEvent);
router.get('/events', getEvents);

export default router;
