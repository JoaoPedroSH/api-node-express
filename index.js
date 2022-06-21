const express = require('express');

var cors = require('cors')
var app = express()

const cupons = require('./src/data/cupons.json')

app.use(cors())

app.get('/api/cupons', function (req, res, next) {
  res.json(cupons)
})

app.listen(3000, function () {
  console.log('API Online (port 3000)')
})