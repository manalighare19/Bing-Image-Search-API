const router = require('express').Router();
const  axios = require('axios');

router.post('/search',async(req,res) => {
    const header = {
        "Ocp-Apim-Subscription-Key": process.env.Subscription-Key
    }

    axios.get('https://eastus.api.cognitive.microsoft.com//bing/v7.0/images/search?q=tropical ocean'
    , {headers : header}
    ).then(response => {
        //console.log(response.data);
        res.send(response.data);
    }).catch(err => {
        console.log(err.response.data);

    })
});

module.exports = router;