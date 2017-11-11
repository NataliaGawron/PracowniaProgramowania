const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routing = require('.routes/api');

//const routes=require('./routes/api');
//set up express app
const app = express();
const port = 4000;

//connect to mongodb
mongoose.connect('mongodb://localhost/natalia', { useMongoClient: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routers
app.use('/api',require('./routes/api'));

app.get('/api',function(req,res){
    console.log('GET request');
    //res.end();
    res.send({name: 'Natalia'})
});

//listen for request
app.listen(process.env.port || 4000, () => {console.log('Nasłuchuj serwerze ')});
