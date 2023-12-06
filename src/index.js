//? -------------jsonplaseholder-------------
// import './jsonApi.js';
//? -------------https://openweathermap.org/-------------
// import './weatherApi.js';

import { Notify } from 'notiflix';
import { fetchBreeds } from './cat-api';

import { TheCatAPI } from '@thatapicompany/thecatapi';

const url = `https://api.thecatapi.com/v1`;

fetchBreeds(url + '/breeds')
  .then(data => {
    document.querySelector('.loader-container').innerHTML =
      "<span class='loader'></span>";
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
      document.querySelector('.breed-select').appendChild(option);
    }
  })
  .then(() => {
    setTimeout(() => {
      document.querySelector('.loader-container').innerHTML = '';
    }, 500);
  })
  .catch(function (error) {
    Notify.failure(
      `Oops! Something went wrong! Try reloading the page! ${error}`
    );
  });

/*
Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту, необхідно наповнити select.breed-select опціями так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.

Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
*/
