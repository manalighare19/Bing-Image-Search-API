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
            res.status(400).send({
                "errors":err.response.data.errors
            });
        }else if(err.response.status == 401){
            res.status(401).send(err.response.data);
        }else if(err.response.status == 500){
            res.status(500).send({
                "message" : "Unexpected server error"
            });
        }else{
            res.status(400).send({
                "message" : "Error occured"
            });
        }  
    })
});


// //Image search
// router.get('/search', (req, res) => {
//     let config = {
//         headers:{ 
//                     "Content-Type":"application/json",
//                     "Ocp-Apim-Subscription-Key": process.env.SubscriptionKey 
//                 },
//         params: { 
//                     "q" : req.query.q,
//                     "imageType" : req.query.imageType,
//                     "count": req.query.count,
//                     "offset" : req.query.offset,
//                     "safeSearch": req.query.safeSearch,
//                     "mkt" : req.query.mkt,
//                     "color" : req.query.color,
//                     "freshness" : req.query.freshness
//                 },
//       }
//     axios.get( process.env.endpoint , config
    
//     ).then(response => {
//         res.send(response.data); 
        
//     }).catch(err => {
//         console.log(err);
//         if(err.response.status == 400){
//             res.status(400).send({
//                 "errors":err.response.data.errors
//             });
//         }else if(err.response.status == 401){
//             res.status(401).send(err.response.data);
//         }else if(err.response.status == 500){
//             res.status(500).send({
//                 "message" : "Unexpected server error"
//             });
//         }else{
//             res.status(400).send({
//                 "message" : "Error occured"
//             });
//         }  
//     })
// });


//Trending
router.get('/trending', (req, res) => {
    const header = {
        "Ocp-Apim-Subscription-Key": process.env.SubscriptionKey
    }
    axios.get( process.env.trendingEndpoint , {headers : header}   
    ).then(response => {
        res.send(response.data); 
        
    }).catch(err => {
        console.log(err);
        if(err.response.status == 401){
            res.status(401).send(err.response.data);
        }else{
            res.status(400).send({
                "message" : "Error occured"
            });
        }
    })
});

//Get image insights
router.get('/details', (req, res) => {
    let config = {
        headers:{ 
                    "Ocp-Apim-Subscription-Key": process.env.SubscriptionKey 
                },
        params: { 
                    "insightsToken" : req.query.insightsToken,
                    "query" : req.query.query
                },
      }
    axios.get( process.env.detailsEndpoint , config   
    ).then(response => {
        res.send(response.data); 
        
    }).catch(err => {
        console.log(err.response.data);
        if(err.response.status == 404){
            res.status(404).send({
                "message" : "Access denied. Insights token not found."
            });
        }else{
            res.status(400).send({
                "message" : "Error occured"
            });
        }

    })
});

module.exports = router;