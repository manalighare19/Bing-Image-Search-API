const router = require('express').Router();
const  axios = require('axios');


//Image search
router.post('/search', (req, res) => {
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
                    "mkt" : req.query.mkt,
                    "color" : req.query.color,
                    "freshness" : req.query.freshness
                },
      }
    axios.get( process.env.endpoint , config
    
    ).then(response => {
        res.send(response.data); 
        
    }).catch(err => {
        console.log(err);
        if(err.response.status == 400){
            res.send({
                "errors":err.response.data.errors
            });
        }
        else if(err.response.status == 401){
            res.send(err.response.data);
        }
        else if(err.response.status == 500){
            res.send("Unexpected server error");
        }

       
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