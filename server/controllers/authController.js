const userModel = require('../models/userModel');

// Example function
exports.exampleFunction = (req, res, next) => {
    res.send('Example response from controller');
};

// Login function
exports.login = (req, res, next) => {
    const { email, password } = req.body;
    const existingUser = userModel.get_user_by_email(email);
    res.send('Login response from controller');
}