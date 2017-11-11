const express = require('express');
const router = express.Router();

router.get('/api/musicWorld',function(req,res){
    res.send({type: 'GET'})
});


//add a musicWord to the db
router.post('/api/musicWorld',function(req,res){
    console.log(req.body);
    res.send({type: 'GET'})
});
//updadate a musicWord in the db
router.put('/api/musicWorld/:id',function(req,res){
    res.send({type: 'GET'})
});
//delete a musicWorld from the db
router.get('/api/musicWorld/:id',function(req,res){
    res.send({type: 'GET'})
});

module.exports = router;


