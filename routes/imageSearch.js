const router = require('express').Router();
const {searchValidation} = require('../validation');
const  axios = require('axios');


//Image search
router.post('/search', (req, res) => {
    
    const { error } = searchValidation(req.body);
    //Validation
    if(error) return res.status(400).send({
        status : res.statusCode,
        message: error.details[0].message
    });

    let searchTerm = req.body.q;
    let config = {
        headers:{ 
                    "Content-Type":"application/json",
                    "Ocp-Apim-Subscription-Key": process.env.SubscriptionKey 
                },
        params: { 
                    "q" : searchTerm,
                    "imageType" : req.query.imageType,
                    "count": req.query.count,
                    "offset" : req.query.offset,
                    "safeSearch": req.query.safeSearch,
                    "mkt" : req.query.mkt
                },
      }
    console.log(searchTerm);
     
    axios.get( process.env.endpoint , config
    
    ).then(response => {
        res.send(response.data);  
        
    }).catch(err => {
        console.log(err);

    })
});


//Trending
router.post('/trending', (req, res) => {

    const header = {
        "Ocp-Apim-Subscription-Key": process.env.SubscriptionKey
    }
    axios.get( process.env.trendingEndpoint , {headers : header}   
    ).then(response => {
        res.send(response.data); 
        
    }).catch(err => {
        console.log(err);

    })
});

module.exports = router;