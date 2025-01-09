import { Trip } from "../models/Trip.js";
import { Testimonial } from "../models/Testimonial.js";

const homePage = async (req, res) =>{
    const page = 'Inicio';
    const classContent = 'home';

    const promiseDB = [];

    promiseDB.push(Trip.findAll({limit:3}));
    promiseDB.push(Testimonial.findAll({limit:3}));

    try {
        const result = await Promise.all(promiseDB);
        res.render('home',{
            page,
            classContent,
            trips: result[0],
            testimonials: result[1]
        });
    } catch (error) {
        console.error(error)
    }// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
}

const aboutUsPage = (req, res) =>{
    const page = 'Acerca de Nostoros';

    res.render('about-us', {
        page
    });
}
const testimonialsPage = async (req, res) =>{
    const page = 'Testimoniales';
    const testimonials = await Testimonial.findAll();
    console.log(testimonials);
    
    res.render('testimonials', {
        page,
        testimonials
    });
}
const tripsPage = async (req, res)=>{
    
    const trips = await Trip.findAll();
    const page = 'Viajes';

    res.render('trips',{
        page,
        trips
    });
}

const tripDetailsPage = async (req, res)=>{

    const {slug} = req.params;
    const page = 'Información viaje';
    try {
        const trip = await Trip.findOne({
            where: {slug}
        });

        res.render('trip',{
            page,
            trip
        })
    } catch (error) {
        console.error(error);
    }
}

export{
    homePage,
    aboutUsPage,
    testimonialsPage,
    tripsPage,
    tripDetailsPage
}