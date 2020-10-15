require("dotenv").config();
const yelpApi = process.env.YELP_API_KEY;

const express = require('express');
const router = express.Router();
const app = express();
const axios = require('axios');

router.get('/:sortby', (req, res) => {
    const searchTerm = req.query.searchterm
    const searchLocation = req.query.searchLocation
    return axios({
        method: 'get',
        url: `https://api.yelp.com/v3/businesses/search`,
        params: {
            term: searchTerm,
            location: searchLocation,
            sort_by: req.params.sortby,
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