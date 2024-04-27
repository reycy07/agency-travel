import Siquelize from 'sequelize';
import db from '../config/db.js';

export const Trip = db.define('viajes',{
    titulo:{
        type: Siquelize.STRING
    },
    precio:{
        type: Siquelize.STRING
    },
    fecha_ida:{
        type: Siquelize.DATE
    },
    fecha_vuelta:{
        type: Siquelize.DATE
    },
    imagen:{
        type:Siquelize.STRING
    },
    descripcion:{
        type: Siquelize.STRING
    },
    disponibles:{
        type: Siquelize.STRING
    },
    slug:{
        type: Siquelize.STRING
    }
});