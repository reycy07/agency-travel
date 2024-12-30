import express from 'express';
import { homePage, aboutUsPage, testimonialsPage, tripsPage, tripDetailsPage } from '../controllers/pagesController.js';
import { saveTestimonials } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', homePage);

router.get('/about-us', aboutUsPage);

router.get('/trips', tripsPage);

router.get('/trips/:slug', tripDetailsPage);

router.get('/testimonials', testimonialsPage);

router.post('/testimonials', saveTestimonials)


export default router;

