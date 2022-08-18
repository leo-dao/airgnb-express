const express = require('express');
const router = express.Router();
const AdSchema = require('../models/Ad');
const UserSchema = require('../models/User');

router.get('/', async (req, res, next) => {

    console.log(req.query)
    /*  var type = req.body.data.type;
     var id = req.body.data.id
 
     if (type === 'ad') {
         AdSchema.findById(id);
     }
 
     else if (type === 'user') {
         UserSchema.findById(id);
     } */

});

module.exports = router;