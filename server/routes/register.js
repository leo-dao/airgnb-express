const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserSchema = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const upload = require('../middleware/upload');

router.post('/', upload.single('avatar'), async (req, res, next) => {

    try {

        // Checking no fields are empty
        Object.entries(req.body).forEach(element => {
            if (element[1] === '') {
                return next(new ErrorResponse(`Missing ${element[0]}`), 400)
            }
        });

        if (typeof req.file === 'undefined') {
            return next(new ErrorResponse(`Missing profile picture`), 400)
        }

        const {
            name,
            email,
            location,
        } = req.body;

        // Checking if user already exists
        const emailExist = await UserSchema.findOne({ email: email });
        if (emailExist) {
            return next(new ErrorResponse('Email is already being used'), 401)
        }

        const img = req.file.filename;

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new UserSchema({
            name: name,
            email: email,
            password: securePassword,
            location: location,
            avatar: img,
        });

        await newUser.save()

        // Sending jwt
        const token = newUser.getSignedToken();
        res.status(202).json({ success: true, token })

    } catch (err) {
        next(err)
    };

});

module.exports = router;
