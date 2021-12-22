const express = require('express')
const { getAllMovies } = require('./controller/movies')
const app = express()

// 1) A request for all data [X]
// 2) A request for all movies by a director
// 3) A request for a movie by title. Note that you should support partial matches as shown below.

app.get('/', getAllMovies)



app.listen((1345), () => {
  console.log('Listening on http://localhost:1345...')
})
