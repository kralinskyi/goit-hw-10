//? -------------jsonplaseholder-------------
// import './jsonApi.js';
//? -------------https://openweathermap.org/-------------
// import './weatherApi.js';

import SlimSelect from 'slim-select';
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_pVThY4dIr5gTvYeHoBxFSIzDNo2KPwWO6IF8FKCHH5k0X4bCLe4gN6CG5lPb8OZO';

import { TheCatAPI } from '@thatapicompany/thecatapi';

new SlimSelect({
  select: '.breed-select',
  settings: {
    contentLocation: document.querySelector('.cat-info'),
  },
});

axios('https://api.thecatapi.com/v1/breeds');
