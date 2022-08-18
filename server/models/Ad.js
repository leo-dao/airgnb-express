const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const { User } = require('./User');

const AdSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: '',
    },
    description: {
        type: String,
        required: true,
        default: '',
    },
    category: {
        type: String,
        required: true,
        default: '',
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    _id: {
        type: String,
        required: true,
        default: '',
    },
    images: {
        type: [{
            img: String,
            _id: String,
        }],
        require: true,
    },
    user: {
        // type: any
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Ad', AdSchema);