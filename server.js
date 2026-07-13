const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.get('/', (req,res)=>{
    res.send("This is the homepage");
});

app.all('/*path', (req,res)=>{
    res.send("Sorry! This path does not exist");
});

app.listen(port, ()=>{
    console.log(`This app is running on port ${port}`);
});