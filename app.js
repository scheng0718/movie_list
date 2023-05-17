// load express module
const express = require('express')
const app = express()
// Define server-related variables
const port = 3000
const exphbs = require('express-handlebars')

// Set up template engine using handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Set up static file
app.use(express.static('public'))

// Set up route and render the index page to browser
app.get('/', (req, res) => {
  const movieOne = {
    id: 1,
    image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    title: 'Jurassic World: Fallen Kingdom'
  }
  const numberList = [1, 2, 3, 4, 5, 6, 7, 8]
  // past the movie data into partial template
  res.render('index', {movie: movieOne, numbers: numberList})
})

// The sever is listening and running at http://localhost:3000
app.listen(port, () => {
  console.log(`The server is listening and running at localhost:${port}`)
})
