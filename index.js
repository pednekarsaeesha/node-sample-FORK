const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Ankit trying pm2')
})

app.listen(port, () => {
  console.log(`Example app listening on port2 ${port}`)
})