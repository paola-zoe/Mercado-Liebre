const express = require('express');
const app = express();
const PORT= process.env.PORT || 8080;

app.use(express.static('public'));

app.get ('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get ('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get ('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(PORT, ()=>{
    console.log('[server]: corriendo en el puerto ' + PORT)
})