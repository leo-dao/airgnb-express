const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const Ad = require('../models/Ad');
const upload = require('../middleware/upload')

router.post('/', upload.array('images', 6), async (req, res, next) => {



    const {
        title,
        category,
        description,
        price,
        user
    } = req.body;

    const userParsed = JSON.parse(user);

    let images = [];

    req.files.forEach((file) => {
        let image = {
            img: file.filename,
            _id: uuidv4()
        }
        images.push(image)
    })

    try {
        const newAd = new Ad({
            _id: uuidv4(),
            title: title,
            category: category,
            description: description,
            price: price,
            images: images,
            user: userParsed
        })

        await newAd.save();
    }
    catch (err) {
        next(err)
    }
});

module.exports = router;