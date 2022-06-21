const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//let urlencodedParser = bodyParser.urlencoded({ extended: false }); //para post

/** Endpoints */
const sites = require('./src/data/sites.json')
const segmentos = require('./src/data/segmentos.json')
const cupons = require('./src/data/cupons.json')
const configs = require('./src/data/configs.json')


app.get('/configs', (req, res) => {
  res.json(configs)
}) 

app.get('/sites', (req, res) => {
  res.json(sites)
}) 

app.get('/segmentos', (req, res) => {
  res.json(segmentos)
}) 

app.get('/cupons', (req, res) => {
  res.json(cupons)
})


app.listen(3300, function () {
  console.log('API Online (port 3300)')
})