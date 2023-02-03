const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_name: String,
    email: String,
    password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;


