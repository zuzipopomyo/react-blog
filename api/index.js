const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

app.use("/", (req, res) => {
    console.log('this is zuzipopo')
   
});

app.listen(3001, () => {
    console.log('backend is running');
});
