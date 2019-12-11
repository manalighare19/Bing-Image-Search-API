const router = require('express').Router();
const User = require('../model/User');
//const bcrypt = require('bcryptjs');
const {registerValidation} = require('../validation');

//Register
router.post('/', async (req, res) => {
    //Validate user before creating 
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send({
        status: res.statusCode,
        message: error.details[0].message
    });

    //Checking if email alredy exists
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send({
        status: res.statusCode,
        message:'Email already exists'
    });

    // //Hash the password
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Create new user
    const user =  new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    console.log(user); 
     try{
        const savedUser = await user.save();
        console.log(savedUser);
        
        res.send({user: user._id});
     }catch(err){
        res.status(400).send({
            status : res.statusCode,
            message :err
        });
     }
});


module.exports = router;