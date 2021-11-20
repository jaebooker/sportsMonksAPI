require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { parse } = require('dotenv');
const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('/', async (req, res) => {
  console.log(req.query);
  let sports = await fetch(`https://soccer.sportmonks.com/api/v2.0/predictions/leagues?apikey=${process.env.API_KEY}`)
  let sportsResponse = await sports.json();

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.send([
    {response: sportsResponse}
  ]);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })