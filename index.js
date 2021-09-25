require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express')
const app = express()
const port = process.env.PORT || 80



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
    
    let algo = await fetch(`https://api.twelvedata.com/price?symbol=algo/usd&apikey=${process.env.API_KEY}`)
    let algoResponse = await algo.json();

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.send([
      {name: 'btc/usd', price: parseFloat(btcResponse.price)},
      {name: 'eth/usd', price: parseFloat(ethResponse.price)},
      {name: 'ada/usd', price: parseFloat(adaResponse.price)},
      {name: 'bnb/usd', price: parseFloat(bnbResponse.price)},
      {name: 'algo/usd', price: parseFloat(algoResponse.price)},
    ]);
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })