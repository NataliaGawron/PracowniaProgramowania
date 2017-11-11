const express = require('express');
const routes=require('./routes/api');
//set up express app
const app = express();

app.use('/api',require('./routes/api'));

app.get('/api',function(req,res){
    console.log('GET request');
    //res.end();
    res.send({name: 'Natalia'});
});

//listen for request
app.listen(process.env.port || 4000, () => {console.log('Nasłuchuj serwerze ')});
