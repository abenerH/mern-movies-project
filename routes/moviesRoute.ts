import express from "express"
import {getAllMovies} from '../services/moviesServices'
const router = express.Router()

router.get("/", (_req, res) => {
    res.send(getAllMovies())
})

router.post("/", (_req, res) => {
    res.send('Adding a movie...')
})

export default router
