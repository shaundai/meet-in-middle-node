require("dotenv").config();
const yelpApi = process.env.YELP_API_KEY;

const express = require('express');
const router = express.Router();
const app = express();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send('hi')
})

module.exports = router;