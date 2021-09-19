require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express')
const app = express()
const port = 3000




app.get('/getPrice', async (req, res) => {
    console.log(req.query);
    let btc = await fetch(`https://api.twelvedata.com/price?symbol=btc/usd&apikey=${process.env.API_KEY}`)
    let btcResponse = await btc.json();

    let eth = await fetch(`https://api.twelvedata.com/price?symbol=eth/usd&apikey=${process.env.API_KEY}`)
    let ethResponse = await eth.json();

    let ada = await fetch(`https://api.twelvedata.com/price?symbol=ada/usd&apikey=${process.env.API_KEY}`)
    let adaResponse = await ada.json();

    let bnb = await fetch(`https://api.twelvedata.com/price?symbol=bnb/usd&apikey=${process.env.API_KEY}`)
    let bnbResponse = await bnb.json();

    res.send([
      {name: 'btc/usd', price: btcResponse.price},
      {name: 'eth/usd', price: ethResponse.price},
      {name: 'ada/usd', price: adaResponse.price},
      {name: 'bnb/usd', price: bnbResponse.price},
    ]);
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })