const homePage = (req, res) =>{
    const page = 'Inicio';

    res.render('home',{
        page 
    });// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
}

const aboutUsPage = (req, res) =>{
    const page = 'Acerca de Nostoros';

    res.render('about-us', {
        page
    });
}
const testimonialsPage = (req, res) =>{
    const page = 'Testimoniales';

    res.render('testimonials', {
        page
    });
}
const tripsPage = (req, res)=>{
    const page = 'Viajes';

    res.render('trips',{
        page
    });
}


export{
    homePage,
    aboutUsPage,
    testimonialsPage,
    tripsPage,
}