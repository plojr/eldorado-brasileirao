require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/futebol', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
require('./routes/index')(app);
app.listen(process.env.PORT);
