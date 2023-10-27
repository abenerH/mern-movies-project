import express from 'express'
import moviesRoute from '../routes/moviesRoute'

const app = express()
app.use(express.json())
app.use('/api/movies', moviesRoute)

const PORT = 3000

app.get('/', (_, res) => {
    res.send('Hello there')
})

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})
