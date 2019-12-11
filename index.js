const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const verify = require('./routes/verifyToken');
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

//Import Routes
const searchRoute = require('./routes/imageSearch');
const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');

//Connect to DB
mongoose.connect( process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to db')
});

//Middleware
app.use(express.json());

// Route Middlewares using JWT verification
// app.use('/images', verify, searchRoute);
// app.use('/users', userRoute);
// app.use('/login', loginRoute);

//Route Middlewares
app.use('/images', searchRoute);
app.use('/users', userRoute);
app.use('/login', loginRoute);




app.listen(port, () => console.log('Listening on port 3000'));