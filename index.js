const express = require('express')
const { getAllMovies, movieByDirectorOrTitle } = require('./controller/movies')
const app = express()

app.get('/', getAllMovies)

app.get('/:directors', movieByDirectorOrTitle)

app.listen(1345, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1345...')
})
