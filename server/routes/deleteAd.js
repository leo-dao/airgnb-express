const express = require('express');
const router = express.Router();
const Ad = require('../models/Ad');

router.delete('/', async (req, res, next) => {

    try {
        let id = req.body.adId;
        const ad = await Ad.findById(id);

        if (!ad) {
            return next(new ErrorResponse('No ads found matching this id'), 404)
        }

        await Ad.deleteOne({ _id: id });

    }
    catch (err) {
        return next(err)
    }
});

module.exports = router;