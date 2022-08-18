const mongooose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
        default: '',
    },
    email: {
        type: String,
        required: true,
        default: '',
    },
    password: {
        type: String,
        required: true,
        default: '',
    },
    location: {
        type: String,
        required: true,
        default: '',
    },
    avatar: {
        type: String,
    },
    numAds: {
        type: Number,
        required: true,
        default: 0,
    },
    rating: {
        type: Number,
        required: true,
        default: 5,
    },
    _id: {
        type: String,
        required: true,
        default: uuidv4(),
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false,
    }
});

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET)
};

module.exports = mongooose.model('User', UserSchema);