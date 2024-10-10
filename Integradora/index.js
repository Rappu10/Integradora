//1
const express = require('express');

//2
const app = express();

//4
app.use(express.static("Integradora/public"));


//5
app.listen (3003,function(){
    console.log('El servidor es http://localhost:3003');
});