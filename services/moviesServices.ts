// import movieData from './movies.json'
import { PrismaClient } from '@prisma/client'
import { movieEntries } from '../types'

const prisma = new PrismaClient()

// Returns an array of movies
export async function findAllMovies (): Promise<movieEntries[]> {
  try {
    const allMovies = await prisma.movies.findMany()
    return (allMovies)
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect
  }
}

// Return a single movie by ID
export async function findMovieById (id: string): Promise<movieEntries | null> {
  try {
    const movieFound = await prisma.movies.findUnique({
      where: {
        id
      }
    })
    return movieFound
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect
  }
}

// Post an individual movie
export async function postMovie ({ title, releaseDate, directedBy, score, cast, poster }: { title: string, releaseDate: Date, directedBy: string, score: number, cast: string[], poster: string }): Promise<movieEntries | null> {
  try {
    const postedMovie = await prisma.movies.create({
      data: {
        title,
        releaseDate,
        directedBy,
        score,
        cast,
        poster
      }
    })

    return postedMovie
  } catch (error) {
    console.log(error)
    return null
  } finally {
    await prisma.$disconnect
  }
}
