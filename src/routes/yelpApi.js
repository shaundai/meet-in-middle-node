require("dotenv").config();
const port = process.env.PORT || 3001;
const yelpApi = process.env.YELP_API_KEY;

const express = require('express');
const router = express.Router();
const app = express();
const axios = require('axios');

router.get('/', (req, res))

module.exports = router;