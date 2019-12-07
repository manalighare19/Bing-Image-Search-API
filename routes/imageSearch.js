const router = require('express').Router();
const {searchValidation} = require('../validation');
const  axios = require('axios');



router.post('/search',async(req,res) => {
    const { error } = searchValidation(req.body);
    //Validation
    if(error) return res.status(400).send({
        status : res.statusCode,
        message: error.details[0].message
    });
    let searchTerm = req.body.q;
    let imageType = req.query.imageType;
    let config = {
        headers: { "Ocp-Apim-Subscription-Key": process.env.SubscriptionKey },
        params: { q : searchTerm,
                "imageType": imageType},
      }
      console.log(searchTerm);
      console.log(imageType);
      

    await axios.get( process.env.endpoint , config ,
    
    ).then(response => {
        res.send(response.data);
       
        
    }).catch(err => {
        console.log(err);

    })
});

module.exports = router;