const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Load .env file into process env variables
dotenv.config();

// Create a express app
const app = express();

const mongoConnectionString = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose.connect(mongoConnectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3000, ()=> {
    console.log('Servidor escutando a porta 3000');
});