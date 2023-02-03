const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todo: String
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;