require("dotenv").config();
const yelpApi = process.env.YELP_API_KEY;

const express = require('express');
const router = express.Router();
const app = express();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send('google side')
})

router.get('/distance', (req, res) => {
    const searchOrigins = req.query.searchorigins
    return axios({
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters`,
        params: {
            origins: searchOrigins
        },
        headers: {
            Authorization: `Bearer ${yelpApi}`
        }
    }).then((response) => {
        res.json(response.data)
    }).catch((err) => {
        console.log(err)
    })
})



module.exports = router;