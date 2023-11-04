export interface movieEntries {
  id: string
  title: string
  releaseDate: Date
  score: number
  directedBy: string
  cast: string[]
  poster: string?
}

export type scoreOnlyMovies = Pick<movieEntries, 'title' | 'score'>
