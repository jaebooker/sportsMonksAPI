require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { parse } = require('dotenv');
const express = require('express')
const app = express()
const port = process.env.PORT || 80


app.get('/getPriceBTC', async (req, res) => {
  console.log(req.query);
  let btc = await fetch(`https://api.twelvedata.com/price?symbol=btc/usd&apikey=${process.env.API_KEY}`)
  let btcResponse = await btc.json();

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.send([
    {name: 'btc/usd', price: parseFloat(btcResponse.price)}
  ]);
})

app.get('/getPriceETH', async (req, res) => {
  console.log(req.query);
  let eth = await fetch(`https://api.twelvedata.com/price?symbol=eth/usd&apikey=${process.env.API_KEY}`)
  let ethResponse = await eth.json();

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.send([
    {name: 'eth/usd', price: parseFloat(ethResponse.price)}
  ]);
})

app.get('/getPriceADA', async (req, res) => {
  console.log(req.query);
  let ada = await fetch(`https://api.twelvedata.com/price?symbol=ada/usd&apikey=${process.env.API_KEY}`)
  let adaResponse = await ada.json();

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.send([
    {name: 'ada/usd', price: parseFloat(adaResponse.price)}
  ]);
})

app.get('/getPriceBNB', async (req, res) => {
  console.log(req.query);
  let bnb = await fetch(`https://api.twelvedata.com/price?symbol=bnb/usd&apikey=${process.env.API_KEY}`)
  let bnbResponse = await bnb.json();

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.send([
    {name: 'bnb/usd', price: parseFloat(bnbResponse.price)}
  ]);
})

app.get('/getPriceALGO', async (req, res) => {
  console.log(req.query);
  let algo = await fetch(`https://api.twelvedata.com/price?symbol=algo/usd&apikey=${process.env.API_KEY}`)
  let algoResponse = await algo.json();

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.send([
    {name: 'algo/usd', price: parseFloat(algoResponse.price)}
  ]);
})

  app.get('/getWeather', async (req, res) => {
    console.log(req.query);

    let toronto = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=${process.env.WEATHER_API_KEY}`);
    let torontoResponse = await toronto.json();
    
    let london = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${process.env.WEATHER_API_KEY}`);
    let londonResponse = await london.json();
   
    let helsinki = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=helsinki&units=metric&appid=${process.env.WEATHER_API_KEY}`);
    let helsinkiResponse = await helsinki.json();
   
    let cairo = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&appid=${process.env.WEATHER_API_KEY}`);
    let cairoResponse = await cairo.json();

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
    res.send([
      { name: 'toronto', temp: parseFloat(torontoResponse.main.temp)},
      { name: 'london', temp: parseFloat(londonResponse.main.temp)},
      { name: 'helsinki', temp: parseFloat(helsinkiResponse.main.temp)},
      { name: 'cairo', temp: parseFloat(cairoResponse.main.temp)},
      ])
  })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })