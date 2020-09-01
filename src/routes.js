const express = require('express')

const routes = express.Router()

routes.get('/users', (req, res) => {
  return res.send('ok')
})

module.exports = routes
