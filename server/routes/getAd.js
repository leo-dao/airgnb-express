const express = require('express');
const router = express.Router();
const AdSchema = require('../models/Ad');
const ErrorResponse = require('../utils/errorResponse');

router.post('/', async (req, res, next) => {

    const id = (req.body.id);

    await AdSchema.findById(id).then(function (ad) {
        res.send(ad)
    }
    ).catch(function (err) {
        res.status(400).send(err)
    }
    );
})

module.exports = router;