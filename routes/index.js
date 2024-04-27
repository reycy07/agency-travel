import express from 'express';
import { homePage, aboutUsPage, testimonialsPage, tripsPage } from '../controllers/pagesController.js';

const router = express.Router();

router.get('/', homePage);

router.get('/about-us', aboutUsPage);

router.get('/trips', tripsPage);

router.get('/testimonials', testimonialsPage);


export default router;

