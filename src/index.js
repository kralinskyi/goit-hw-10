//? -------------jsonplaseholder-------------
// import './jsonApi.js';
//? -------------https://openweathermap.org/-------------
// import './weatherApi.js';

import SlimSelect from 'slim-select';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'live_pVThY4dIr5gTvYeHoBxFSIzDNo2KPwWO6IF8FKCHH5k0X4bCLe4gN6CG5lPb8OZO';

import { TheCatAPI } from '@thatapicompany/thecatapi';

// .setSelected(axios('https://api.thecatapi.com/v1/breeds'));

/*
Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту, необхідно наповнити select.breed-select опціями так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.

Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
*/

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key =
  'live_pVThY4dIr5gTvYeHoBxFSIzDNo2KPwWO6IF8FKCHH5k0X4bCLe4gN6CG5lPb8OZO';
let storedBreeds = [];

fetch(url, {
  headers: {
    'x-api-key': api_key,
  },
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    storedBreeds = data;
    select.setData(data);

    for (let i = 0; i < storedBreeds.length; i += 1) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');
      if (!breed.image) continue;
      //use the current array index

      option.value = `${breed.id}`;
      option.innerHTML = `${breed.name}`;
      document.querySelector('div .breed-select').appendChild(option);
    }
  })
  .catch(function (error) {
    // document.querySelector('.error').classList.toggle('is-hidden')
    console.log(error);
  });

const select = new SlimSelect({
  select: '.breed-select',
});
