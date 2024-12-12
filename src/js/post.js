const BASE_URL = 'http://localhost:3000';

const newMovie = {
  id: 6,
  title: '500 days of summer',
  genre: 'Horror',
  director: 'Marc Webb',
  year: 2009,
};

const options = {
  method: 'POST',
  body: JSON.stringify(newMovie),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

function addMovie(newMovie) {
  return fetch(`${BASE_URL}/movies`, options).then(r => r.json());
}

addMovie(newMovie);
