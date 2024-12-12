const BASE_URL = 'http://localhost:3000';

const updatedMovie = {
  title: 'Harry Potter',
  year: 2001,
};

function updateMovie(updatedMovie, id) {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(updatedMovie),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(`${BASE_URL}/movies/${id}`, options).then(r => r.json());
}

updateMovie(updatedMovie, 4);
