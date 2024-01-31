import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.send('hello word');// req : lo que el usuario nos envia - res : lo que express responde a la solicitud de usuario  
});

app.get('/contactos', (req, res)=>{
    res.send('contactanos');
});

app.get('/sobre-mi', (req, res)=>{
    res.send('Todo lo que quieras saber sobre mí');
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})

