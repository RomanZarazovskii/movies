const BASE_URL = 'http://localhost:3000';

function deleteMovie(id) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/movies/${id}`, options).then(r => r.json());
}

deleteMovie(6);
