const movies = require('../movies')

const getAllMovies = (request, response) => {
  response.send(movies)
}


const movieByDirectorOrTitle = (request, response) => {
  const { directors } = request.params

  const foundFilm = movies.filter((name) => {
    return name.title.toLowerCase().includes(directors.toLowerCase()) ||
      name.directors.find((director) => director.toLowerCase().includes(directors.toLowerCase()))
  })

  if (!foundFilm.length) return response.sendStatus(404)

  return response.send(foundFilm)
}

const savedMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('Miss parameter(s) please double check fields')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = {
  getAllMovies,
  movieByDirectorOrTitle,
  savedMovie
}
