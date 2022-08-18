const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res, next) => {

    User.find().then(function (users) {
        res.send(users)
    })

});

module.exports = router;