// models/User.js
const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: 'Please enter a valid email address',
    }),
];

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: emailValidator, // Add the email validation here
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
