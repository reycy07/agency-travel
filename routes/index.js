import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    
    const page = 'Inicio';

    res.render('home',{
        page 
    });// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
});

router.get('/about-us', (req, res)=>{

    const page = 'Acerca de Nostoros';

    res.render('about-us', {
        page
    });// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
});

router.get('/trips', (req, res)=>{

    const page = 'Viajes';

    res.render('trips', {
        page
    });// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
});

router.get('/testimonials', (req, res)=>{

    const page = 'Testimoniales';

    res.render('testimonials', {
        page
    });// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
});


export default router;

