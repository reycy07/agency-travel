import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home');// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
});

router.get('/about-us', (req, res)=>{
    res.render('about-us');// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
});

export default router;

