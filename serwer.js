const express = require('express');

//set up express app
const app = express();

app.get('/api',function(req,res){
    console.log('GET request');
    //res.end();
    res.send({name: 'Natalia'});
});

//listen for request
app.listen(process.env.port || 4000, () => {console.log('Nasłuchuj serwerze ')});
