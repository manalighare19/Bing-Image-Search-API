const router = require('express').Router();
const User = require('../model/User');
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {loginValidation} = require('../validation');



//Login
router.post('/', async (req,res) => {
    const { error } = loginValidation(req.body);
    //Validate user before login 
    if(error) return res.status(400).send({
        status : res.statusCode,
        message: error.details[0].message
    });

    //checking if email and password is correct
    const user = await User.findOne({email : req.body.email});
    if(!user) return res.status(400).send({
        status: res.statusCode,
        message: 'Email do not exist'
    });
    // const validatePassword = await bcrypt.compare(req.body.password , user.password); 
    // if(!validatePassword) return res.status(400).send({
    //     status : res.statusCode,
    //     message : 'Invalid password'
    // });

    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send({"token": token});
});

module.exports = router;
