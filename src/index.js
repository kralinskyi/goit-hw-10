//? -------------jsonplaseholder-------------
// import './jsonApi.js';
//? -------------https://openweathermap.org/-------------
// import './weatherApi.js';

import { Notify } from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');

fetchBreeds('https://api.thecatapi.com/v1/breeds')
  .then(data => {
    document.querySelector('.loader-container').innerHTML =
      "<span class='loader'></span>";
    setTimeout(() => {
      document.querySelector('.loader-container').innerHTML = '';
    }, 500);
    let storedBreeds = [];
    storedBreeds = data;

    for (let i = 0; i < storedBreeds.length; i += 1) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');

      const { image, id, name } = breed;

      if (!image) continue;

      option.classList.add('option-item');
      option.value = `${id}`;
      option.innerHTML = `${name}`;
      selectEl.appendChild(option);
    }
  })
  .catch(function (error) {
    Notify.failure(
      `Oops! Something went wrong! Try reloading the page! ${error}`
    );
  });

/*

Коли користувач обирає якусь опцію в селекті, необхідно виконувати запит за повною інформацією про кота на ресурс https://api.thecatapi.com/v1/images/search. Не забудь вказати в цьому запиті параметр рядка запиту breed_ids з ідентифікатором породи.

Ось як буде виглядати URL-запит для отримання повної інформації про собаку за ідентифікатором породи:



Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи, робить HTTP-запит і повертає проміс із даними про кота - результатом запиту. Винеси її у файл cat-api.js і зроби іменований експорт.

Якщо запит був успішний, під селектом у блоці div.cat-info з'являється зображення і розгорнута інформація про кота: назва породи, опис і темперамент.

*/

selectEl.addEventListener('change', event => {
  event.preventDefault();

  const id = event.target.value;

  fetchCatByBreed(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
    .then(cat => {
      const { url, breeds } = cat[0];
      const { description, temperament, wikipedia_url, name } = breeds[0];

      document.querySelector('.cat-info').innerHTML = '';

      document.querySelector('.cat-info').insertAdjacentHTML(
        'beforeend',
        ` <img id="breed_image" load="lazy" width="600" src='${url}'/>
         
           <div>
          <h2>Description</h2>
          <p class="cat-description">${description}</p>
        </div>
        <div>
          <h2>Temperament</h2>
        <p class="cat-temperament">${temperament}</p>
        <h2>About</h2>
        <a href="${wikipedia_url}">${name}</a>        
        </div>
          `
      );
    })
    .catch(function (error) {
      document.querySelector('.error').textContent =
        'Oops! Something went wrong! Try reloading the page';
      Notify.failure(
        `Oops! Something went wrong! Try reloading the page! ${error}`
      );
    });
});
