const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, movieByDirectorOrTitle, savedMovie } = require('./controller/movies')
const app = express()

app.get('/', getAllMovies)

app.get('/:directors', movieByDirectorOrTitle)

app.post('/movies', bodyParser.json(), savedMovie)

app.listen(1345)
