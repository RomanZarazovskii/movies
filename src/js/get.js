const allBtn = document.getElementById('all-button');
const list = document.getElementById('movies__container');

allBtn.addEventListener('click', onAllBtnClick);

const BASE_URL = 'http://localhost:3000';

function fetchMovies() {
  return fetch(`${BASE_URL}/movies`).then(r => r.json());
}

function onAllBtnClick() {
  fetchMovies().then(renderMovies);
}

function renderMovies(movies) {
  const markUp = movies
    .map(
      movie => `
    <li class="movies__item">
                <div>
                    <img class="movies__image" src="${movies.image}" alt="#" onerror="this.src='https://via.placeholder.com/150';">
                    <h2 class="movies__tittle"><b>Tittle: </b>${movies.title}</h2>
                    <p class="movies__genre"><b>Genre: </b>${movies.genre}</p>
                    <p class="movies__year"><b>Year: </b>${movies.year}</p>
                </div>
                <div>
                    <button class="movies__item-btn" type="button" id="edit__btn">edit</button>
                    <button class="movies__item-btn" type="button" id="delete__btn">delete</button>
                    </div>
                    </li>
    `
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markUp);
}
