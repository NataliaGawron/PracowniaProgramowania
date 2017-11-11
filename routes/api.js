const express = require('express');
const router = express.Router();
const Accesssories = require('../models/accessoriesSchema');
const Guitars = require('../models/guitarSchema');

//add guitar to database
router.post('/guitars', (req, res, next) => {
    const guitar = req.body;
    Guitars.create(guitar).then((guitar) => {
        res.status(201).send(guitar);
    }).catch(err => { console.log(err.message) });
});

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


