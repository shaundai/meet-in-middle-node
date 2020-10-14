require("dotenv").config();
const port = process.env.PORT || 3001;
const yelpApi = process.env.YELP_API_KEY;

const express = require('express');
const app = express();
const axios = require('axios');

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

