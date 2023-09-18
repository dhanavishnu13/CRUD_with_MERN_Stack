if (process.env.NODE_ENV!='production'){
    require('dotenv').config();
}
const express = require('express');

const connectToDB=require('./config/connectToDB')

const app=express()

connectToDB();

app.get('/',(req,res)=>{
    res.json({hello:"world"});
});

app.listen(process.env.PORT);