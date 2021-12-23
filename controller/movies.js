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

module.exports = {
  getAllMovies,
  movieByDirectorOrTitle
}
