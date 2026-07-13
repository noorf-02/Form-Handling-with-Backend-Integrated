const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.URL).then(()=>{
        console.log("DB has been connected")
    }).catch(err=>{
        console.log("Error in DB connection");
    })
}

module.exports = connectDB;