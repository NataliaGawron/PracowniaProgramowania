const express = require('express');
const router = express.Router();
//const Accesssories = require('../models/accessoriesSchema');
//const Guitars = require('../models/guitarSchema');

///////add guitar to database////////// 
//ctr K + ctr C  <-- ctr K + ctr U

// router.post('/guitars', (req, res, next) => {
//     const guitar = req.body;
//     Guitars.create(guitar).then((guitar) => {
//         res.status(201).send(guitar);
//     }).catch(err => { console.log(err.message) });
// });

router.get('/musicWorld',function(req,res){
    res.send({type: 'GET'})
});


////////add a musicWord to the db/////////
router.post('/musicWorld/:id',function(req,res){
    console.log(req.body);
    res.send({type: 'POST'})
});
///////updadate a musicWord in the db//////
router.put('/musicWorld/:id',function(req,res){
    res.send({type: 'PUT'})
});
///////delete a musicWorld from the db//////
router.delete('/musicWorld/:id',function(req,res){
    res.send({type: 'DELETE'})
});

module.exports = router;


