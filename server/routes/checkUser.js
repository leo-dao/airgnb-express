const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse')

router.get('/', async (req, res, next) => {

    let token;

    // Checking to see if token exists
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (token === undefined) {
        return next(new ErrorResponse('Not authorized to access this route', 401))
    }

    try {
        const decrypted = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decrypted.id);

        if (!user) {
            return next(new ErrorResponse('No user found matching this id', 404))
        }

        res.send(user);
        next();

    } catch (err) {
        return next(err)
    }
}
)

module.exports = router;