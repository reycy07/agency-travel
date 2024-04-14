import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home');// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
});

router.get('/about-us', (req, res)=>{

    const trip = 'Argentina';

    res.render('about-us', {
        trip
    });// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
});

export default router;

