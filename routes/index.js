const express = require("express");
const AuthController = require("../controllers/auth");
const TodoController = require("../controllers/todo");
const userModel = require("../models/user");
const router = express.Router()
const bcryptjs = require("bcryptjs")

// signup Api 

router.post("/api/signup", AuthController.signUp)


// login api 

router.post("/api/login", AuthController.login)

// todo get api 

router.get("/api/todo", TodoController.getTodo)



// create todo api

router.post("/api/todo", TodoController.postTodo)


// todo edit api 

router.put("/api/todo/:id", TodoController.putTodo)


// todo delete api 

router.delete("/api/todo/:id", TodoController.deleteTodo)


module.exports = router;