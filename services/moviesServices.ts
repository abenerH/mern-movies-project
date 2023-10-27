import {movieEntries} from '../types'
import movieData from '../movies.json'

const movies = movieData

export function getAllMovies(): movieEntries[]{
    return movies
}