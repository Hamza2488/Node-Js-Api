const express = require('express');
const app = express();
require("dotenv").config()
const cors = require("cors")


const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose')
const userModel = require('./models/user')
const todoModel = require('./models/todo');
const router = require('./routes/index');


const DBURI = "mongodb+srv://hamza:hamza@cluster0.ut5jjpq.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(DBURI).then((res) => {
    console.log("Connect MongoDb")
}).catch((err) => {
    console.log('error', err)
})


app.use(cors())
app.use(express.json())








app.use(router)


app.listen(PORT, () =>
    console.log(`server is running on http://localhost:${PORT}`)
);