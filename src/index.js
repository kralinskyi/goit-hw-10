//? -------------jsonplaseholder-------------
// import './jsonApi.js';
//? -------------https://openweathermap.org/-------------
// import './weatherApi.js';

import { Notify } from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const loader = document.querySelector('.loader-container');
const catInfo = document.querySelector('.cat-info');
const error = document.querySelector('.error');

loader.classList.add('hidden');
catInfo.classList.add('hidden');
error.classList.add('hidden');

fetchBreeds('https://api.thecatapi.com/v1/breeds')
  .then(data => {
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

    loader.classList.add('hidden'); // Ховаємо loader після завершення запиту
    selectEl.classList.remove('hidden');
  })
  .catch(function (error) {
    error.classList.remove('hidden');

    Notify.failure(
      `Oops! Something went wrong! Try reloading the page! ${error}`
    );
  });

selectEl.addEventListener('change', event => {
  event.preventDefault();
  loader.classList.remove('hidden');
  const id = event.target.value;
  catInfo.innerHTML = '';
  catInfo.classList.add('hidden');

  fetchCatByBreed(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
    .then(cat => {
      return cat;
    })
    .then(cat => {
      const { url, breeds } = cat[0];
      const { description, temperament, wikipedia_url, name } = breeds[0];

      loader.classList.remove('hidden'); // Показуємо loader, ховаємо select

      catInfo.insertAdjacentHTML(
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
      loader.classList.add('hidden'); // Ховаємо loader після завершення запиту
      catInfo.classList.remove('hidden');
    })
    .catch(function (error) {
      loader.classList.add('hidden');
      Notify.failure(
        `Oops! Something went wrong! Try reloading the page! ${error}`
      );
      error.classList.remove('hidden');

      error.textContent = 'Oops! Something went wrong! Try reloading the page';
    });
});
