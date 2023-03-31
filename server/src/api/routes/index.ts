import express from 'express';
import subscribed from './subscribed';
import twitch from './twitch';

const router = express.Router();

// define the home page route
router.use('/subscribed', subscribed);
router.use('/twitch', twitch);

export default router;