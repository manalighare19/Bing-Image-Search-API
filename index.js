const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//Import Routes
const searchRoute = require('./routes/imageSearch');


//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api', searchRoute);


app.listen(port, () => console.log('Listening on port 5000'));