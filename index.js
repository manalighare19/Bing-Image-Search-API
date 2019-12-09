const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;

//Import Routes
const searchRoute = require('./routes/imageSearch');
dotenv.config();


//Middleware
app.use(express.json());

//Route Middlewares
app.use('/images', searchRoute);


app.listen(port, () => console.log('Listening on port 3000'));