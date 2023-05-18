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

app.get('/movies/1', (req, res) => {
  const movieOne = {
    id: 1,
    titile: 'Jurassic World: Fallen Kingdom',
    image: 'c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    release_date: '2018-06-06',
    description: `Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the
        island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group,
        recruits Owen Grady to help prevent the extinction of the dinosaurs once again.`
  }
  res.render('show', {movie: movieOne})
})

// The sever is listening and running at http://localhost:3000
app.listen(port, () => {
  console.log(`The server is listening and running at localhost:${port}`)
})
