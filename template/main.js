import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const button = document.querySelector('#findMovies')

button.addEventListener('click', getMovie)

async function getMovie() {
  const movieId = Math.floor(Math.random() * 1000 + 1)

  const newMovie = await fetch(BASE_URL + movieId + API_KEY, {
    method: 'GET'
  }).then(res => res.json())

  const movieContent = document.querySelector('#movieContent')

  movieContent.innerHTML = `
  <img src="${IMG_URL + newMovie.poster_path}" alt="Capa de filme" />
  <div id="movieDescription">
    <h2 class="movieTittle">${newMovie.original_title}</h2>
    <p class="movieSummary">${newMovie.overview}</p>
  </div>
  `

  if (newMovie.success === false) {
    movieContent.innerHTML = `
  <img src="./assets/nop.png" alt="Não é hora de ver filme" />
  <div id="movieDescription">
    <h2 class="movieTittle">É hora de estudar!!</h2>
    <p class="movieSummary">Não é hora de ver filme, vai estudar.</p>
  </div>
  `
  }
}
