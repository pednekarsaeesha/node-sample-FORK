const express = require('express')
const app = express()
const port = 3000
const logger = require('./logger')

app.get('/', (req, res) => {
  logger.info("we have hit the get api")
  res.send('Hello cutie! Its a new day ')
})

app.get('/health', (req, res) => {
  logger.info(JSON.stringify(req))
  logger.info("Health of the app is fine")
  res.send('Health of the app is fine')
})

app.listen(port, () => {
  logger.debug('App is running')
  console.log(`Example app listening on port2 ${port}`)
})
