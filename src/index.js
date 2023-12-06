//? -------------jsonplaseholder-------------
// import './jsonApi.js';
//? -------------https://openweathermap.org/-------------
// import './weatherApi.js';

import { Notify } from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { refs } from './refs';

refs.loader.classList.add('hidden');
refs.catInfo.classList.add('hidden');
refs.error.classList.add('hidden');

(function onLoadPage() {
  return fetchBreeds('https://api.thecatapi.com/v1/breeds')
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
        refs.selectEl.appendChild(option);
      }

      refs.loader.classList.add('hidden');
      refs.selectEl.classList.remove('hidden');
    })
    .catch(function (error) {
      refs.selectEl.classList.add('hidden');

      refs.error.classList.remove('hidden');
      refs.error.textContent =
        'Oops! Something went wrong! Try reloading the page';
      Notify.failure(
        `Oops! Something went wrong! Try reloading the page! ${error}`
      );
    });
})();

function changeSelectedOption(event) {
  event.preventDefault();

  refs.loader.classList.remove('hidden');
  refs.catInfo.innerHTML = '';
  refs.catInfo.classList.add('hidden');
  refs.selectEl.classList.add('hidden');

  const id = event.target.value;
  fetchCatByBreed(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
    .then(cat => {
      const { url, breeds } = cat[0];
      const { description, temperament, wikipedia_url, name } = breeds[0];

      refs.loader.classList.remove('hidden');

      refs.catInfo.insertAdjacentHTML(
        'beforeend',
        markup({
          url,
          description,
          temperament,
          wikipedia_url,
          name,
        })
      );
      refs.loader.classList.add('hidden');
      refs.catInfo.classList.remove('hidden');
      refs.selectEl.classList.remove('hidden');
    })
    .catch(function (error) {
      refs.loader.classList.add('hidden');
      Notify.failure(
        `Oops! Something went wrong! Try reloading the page! ${error.statusText}`
      );
      refs.error.classList.remove('hidden');
      refs.error.textContent =
        'Oops! Something went wrong! Try reloading the page';
    });
}

refs.selectEl.addEventListener('change', changeSelectedOption);

function markup({ ...params }) {
  return `<img id="breed_image" load="lazy" width="600" src="${params.url}" />
    <div>
      <h2>Description</h2>
      <p class="cat-description">${params.description}</p>
    </div>
    <div>
      <h2>Temperament</h2>
      <p class="cat-temperament">${params.temperament}</p>
      <h2>About</h2>
      <a href="${params.wikipedia_url}">${params.name}</a>
    </div>`;
}
