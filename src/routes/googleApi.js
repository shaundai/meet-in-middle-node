require("dotenv").config();
const googleApi = process.env.GOOGLE_API_KEY;

const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send('google side')
})

router.get('/distance', (req, res) => {
    const searchOrigins = req.query.searchorigins
    const searchDestinations = req.query.searchdestinations
    return axios({
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/distancematrix/json`,
        params: {
            origins: searchOrigins,
            destinations: searchDestinations,
            key: googleApi,
            units: 'imperial'
        }
    }).then((response) => {
        res.json(response.data)
    }).catch((err) => {
        console.log(err)
    })
})



module.exports = router;