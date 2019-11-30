const router = require('express').Router();
const  axios = require('axios');



router.post('/search',async(req,res) => {
 
    let config = {
        headers: { "Ocp-Apim-Subscription-Key": process.env.SubscriptionKey },
        params: { q : 'tropical ocean' },
      }

    await axios.get( process.env.endpoint , config ,
    
    ).then(response => {
        res.send(response.data);
    }).catch(err => {
        console.log(err);

    })
});

module.exports = router;