const express = require('express');
const router = express.Router();
const AdSchema = require('../models/Ad');
const ErrorResponse = require('../utils/errorResponse');

router.get('/', async (req, res, next) => {

    // sending all ads
    await AdSchema.find().then(function (ads) {
        res.send(ads)
    })
})

module.exports = router;