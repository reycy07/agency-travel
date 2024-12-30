import { Testimonial } from "../models/Testimonial.js";

const saveTestimonials = async (req, res) =>{
    const {name, email, message} = req.body;

    const errors = [];
    
    if(name.trim() === ''){
        errors.push({
            message : 'El nombre esta vacio'
        }) 
    }

    if(email.trim() === ''){
        errors.push({
            message: 'El correo esta vacio'
        });
    }

    if(message.trim() === ''){
        errors.push({
            message: 'El mensaje esta vacio'
        });
    }

    if(errors.length > 0){
        const testimonials = await Testimonial.findAll();
        
        res.render('testimonials',{
            page: 'Testimoniales',
            errors,
            name,
            email,
            message,
            testimonials
        });
    }else{

        try {
            await Testimonial.create({
                nombre: name,
                correo: email,
                mensaje: message
            });

            res.redirect('/testimonials');
            
        } catch (error) {
            console.error(error);
        }


    }

}

export {saveTestimonials};
