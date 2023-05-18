// load express module
const express = require('express')
const app = express()
// Define server-related variables
const port = 3000
const exphbs = require('express-handlebars')
const movieList = require('./movies.json')

// Set up template engine using handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Set up static file
app.use(express.static('public'))

// Set up route and render the index page to browser
app.get('/', (req, res) => {
  // past the movie data into partial template
  res.render('index', {movie: movieList.results})
})

// Set up a new route for search bar
app.get('/search', (req, res) => {
  console.log('req.query.keyword is ', req.query.keyword)
  const keyword = req.query.keyword
  const movies = movieList.results.filter(movie => {
    return movie.title.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', {movie: movies, keyword: keyword})
})

// set up new route for show page with params
app.get('/movies/:movie', (req, res) => {
  const movie = movieList.results.find(movie => movie.id.toString() === req.params.movie)
  res.render('show', {movie: movie})
})

// The sever is listening and running at http://localhost:3000
app.listen(port, () => {
  console.log(`The server is listening and running at localhost:${port}`)
})
