/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import moviesRoute from '../routes/moviesRoute'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/movies', moviesRoute)

const PORT = 3000

app.get('/', function (_req, res) {
  res.send('<h1>Welcome, stranger!</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
