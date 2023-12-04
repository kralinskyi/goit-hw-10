/*
KEY_API =
  'live_pVThY4dIr5gTvYeHoBxFSIzDNo2KPwWO6IF8FKCHH5k0X4bCLe4gN6CG5lPb8OZO';
*/

//? -------------jsonplaseholder-------------

let BASE_URL = 'https://jsonplaceholder.typicode.com';
const basicEndPoints = [
  '/posts',
  '/comments',
  '/albums',
  '/photos',
  '/todos',
  '/users',
];

const markupContainer = document.querySelector('.json-container');

function fetchData(url) {
  return fetch(`${url}${basicEndPoints[5]}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function markupUsers(arr) {
  return arr
    .map(({ id, name, username, email, address: { city, street, suite } }) => {
      return `<li>
          <p class="id">${id}</p>
          <p class="name">${name}</p>
          <p class="username">${username}</p>
          <p class="email">${email}</p>
          <p class="address">address: ${city}, ${street}, ${suite}</p>
        </li>`;
    })
    .join('');
}

fetchData(BASE_URL)
  .then(json => {
    markupContainer.innerHTML = markupUsers(json);
  })
  .catch(error => console.log(error));
