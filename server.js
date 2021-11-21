const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose=require('mongoose')
const UserController=require('./controller/UserController');
require('dotenv').config()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/bank',require('./Route/route'));






mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
    });
    
app.listen(process.env.PORT||5000);