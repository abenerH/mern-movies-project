/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { findAllMovies, findMovieById, postMovie } from '../services/moviesServices'
const router = express.Router()

// GET

// Fetch all movies
router.get('/', async (_req, res, next) => {
  try {
    const movies = await findAllMovies()
    res.json({ movies })
  } catch (error: any) {
    next(error.message)
  }
})

// Fetch movie by ID
router.get('/:id', async (req, res, next) => {
  const id = req.params.id

  try {
    const movie = await findMovieById(id)
    if (movie == null) {
      res.status(404)
      res.send('The movie you were looking for has not been found in this database')
      next()
    } else {
      res.json({ movie })
    }
  } catch (error: any) {
    console.error('Error:', error)
    next(error.message)
  }
})

// POST

// Post movie into database
router.post('/', async (req, res) => {
  try {
    const { title, releaseDate, directedBy, score, cast, poster } = req.body

    const postedMovie = await postMovie({
      title,
      releaseDate,
      directedBy,
      score,
      cast,
      poster
    })

    console.log(postedMovie)
    res.json(postedMovie)
  } catch (error) {
    res.status(500)
    res.render('error', { error })
  }
})

export default router
