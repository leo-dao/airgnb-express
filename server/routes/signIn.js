const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

router.post("/", async (req, res, next) => {

    const { email, password } = req.body;

    try {
        // Finding user
        const user = await User.findOne({ email: email });

        if (!user) {
            return next(new ErrorResponse("Email not found", 401));
        }

        // Checking password
        const validPass = await user.matchPassword(password);
        if (!validPass) {
            return next(new ErrorResponse("Incorrect password", 401))
        }

        // Sending jwt
        const token = user.getSignedToken();
        res.status(202).json({ success: true, token })

    } catch (err) {
        next(err)
    };
});

module.exports = router;