const express = require('express');
var app = express();

app.get('/', (reuest, response)=>{
    response.send('Welcome!');
});

app.get('/home', (reuest, response)=>{
    response.send('This is my home');
});

app.get('/gallery', (reuest, response)=>{
    response.send('This is the gallery page');
});

app.get('/contactpage', (reuest, response)=>{
    response.send('This is the contact page');
});

app.listen(3000, (e)=>{
    if(e){
        console.log('error');
    }
    else{
        console.log('Server running at http://localhost:3000')
    }
});