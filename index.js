import express from 'express';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000;

app.set('view engine', 'pug');

//Variables globales 
app.use( (req, res, next) => {

    const year = new Date();

    res.locals.currentlyYear = year.getFullYear();

    res.locals.siteName = 'Agencia de viajes';

    return next();
})

app.use('/', router);

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})

