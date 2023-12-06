import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_pVThY4dIr5gTvYeHoBxFSIzDNo2KPwWO6IF8FKCHH5k0X4bCLe4gN6CG5lPb8OZO';

export function fetchBreeds(url) {
  return axios(url).then(({ data }) => {
    return data;
  });
}

export function fetchCatByBreed(url) {
  return axios(url).then(({ data }) => {
    return data;
  });
}
