import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const movies = [
  {
    title: 'Inception',
    releaseDate: new Date('2010-07-16'),
    score: 8.8,
    directedBy: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    poster: 'https://www.themoviedb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg'
  },
  {
    title: 'The Shawshank Redemption',
    releaseDate: new Date('1994-09-23'),
    score: 9.3,
    directedBy: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
  },
  {
    title: 'The Dark Knight',
    releaseDate: new Date('2008-07-18'),
    score: 9.0,
    directedBy: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eP5NL7ZlGoW9tE9qnCdHpOLH1Ke.jpg'
  },
  {
    title: 'Pulp Fiction',
    releaseDate: new Date('1994-10-14'),
    score: 8.9,
    directedBy: 'Quentin Tarantino',
    cast: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    releaseDate: new Date('2001-12-19'),
    score: 8.8,
    directedBy: 'Peter Jackson',
    cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'
  },
  {
    title: 'Forrest Gump',
    releaseDate: new Date('1994-07-06'),
    score: 8.8,
    directedBy: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg'
  },
  {
    title: 'Fight Club',
    releaseDate: new Date('1999-10-15'),
    score: 8.8,
    directedBy: 'David Fincher',
    cast: ['Edward Norton', 'Brad Pitt', 'Helena Bonham Carter'],
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg'
  },
  {
    title: 'Gladiator',
    releaseDate: new Date('2000-05-05'),
    score: 8.5,
    directedBy: 'Ridley Scott',
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg'
  },
  {
    title: 'The Matrix',
    releaseDate: new Date('1999-03-31'),
    score: 8.7,
    directedBy: 'The Wachowskis',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
  },
  {
    title: 'The Godfather',
    releaseDate: new Date('1972-03-24'),
    score: 9.2,
    directedBy: 'Francis Ford Coppola',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
  }
]

function seedMovies (): any {
  Promise.all(movies.map(async movie => await prisma.movies.create({
    data: {
      ...movie
    }
  }))).then(() => console.info('[SEED] Successfully created movie records'))
    .catch((error) => console.error('[SEED] An error ocurred and movies seed could not germinate', error.message))
}

seedMovies()
