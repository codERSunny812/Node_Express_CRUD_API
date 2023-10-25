const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Router/users')
const app = express();




const PORT = 1200; //port of our project

// Use bodyParser middleware to parse JSON data
app.use(bodyParser.json());

app.set("view engine" , "ejs");
app.use('/users',router);

app.get('/',(req,res)=>{
    res.render("index");
});

app.listen(PORT);