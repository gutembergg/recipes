const express = require('express')
require('dotenv').config()

const app = express()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = 5555

/// Middlewares//////////////////////////////////////////////////////////////////////

app.use(cors())
app.use(morgan('dev'))
app.use(express.json)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes)

/// ////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Listem PORT ${PORT}`)
})
