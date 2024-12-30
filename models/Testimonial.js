import Siquelize from 'sequelize';
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales',{
    nombre:{
        type: Siquelize.STRING
    },
    correo:{
        type: Siquelize.STRING
    },
    mensaje:{
        type: Siquelize.STRING
    }
});