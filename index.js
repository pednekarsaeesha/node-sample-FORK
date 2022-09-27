const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Its a new day ')
})

app.listen(port, () => {
  console.log(`Example app listening on port2 ${port}`)
})