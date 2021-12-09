const express = require('express')
const movies = require('./movies')
const app = express()

// 1) A request for all data [X]
// 2) A request for all movies by a director
// 3) A request for a movie by title. Note that you should support partial matches as shown below.[1/2]

app.get('/', (request, response) => {
  return response.send({ movies })
})

// edit so it returns partial matches
app.get('/:title', (request, response) => {
  const { title } = request.params
  const findTitle = movies.filter(name => name.title === title || name.title.match(/''/g))

  return response.send(findTitle)
})


app.listen((1345), () => {
  console.log('Listening on http://localhost:1345...')
})

