// load express module
const express = require('express')
const app = express()
// Define server-related variables
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

// the sever is listening and running at http://localhost:3000
app.listen(port, () => {
  console.log(`The server is listening and running at localhost:${port}`)
})
