const express = require('express');
const router = express.Router();
const Guitars = require('../models/Guitars');
//const Accessories = require('../models/Accessories');

///////add guitar to database////////// 
//ctr K + ctr C  <-- ctr K + ctr U

// router.post('/guitars', (req, res, next) => {
//     const guitar = req.body;
//     Guitars.create(guitar).then((guitar) => {
//         res.status(201).send(guitar);
//     }).catch(err => { console.log(err.message) });
// });

/////////////////////////Guitars/////////////////
router.get('/guitars',function(req,res){
    res.send({type: 'GET'})
});

//add a guitar to the db//
router.post('/guitars/',function(req,res){
    Guitars.create(req.body).then(function(guitar){
        res.send(guitar);
    });
    //console.log(req.body);
});
//updadate a musicWord in the db//
router.put('/guitars/:id',function(req,res){
    res.send({type: 'PUT'})
});
//delete a guitar from the db//
router.delete('/guitars/:id',function(req,res){
    res.send({type: 'DELETE'})
});

// ///////////////ACCESSORIES//////////////////
// router.get('/accessories/:id',function(req,res){
//     res.send({type: 'GET'})
// });

// //add a guitar to the db//
// router.post('accessories/:id',function(req,res){
//     Accesssories.create(req.body).then(function(accessories){
//         res.send(accessories);
//     });

module.exports = router;
