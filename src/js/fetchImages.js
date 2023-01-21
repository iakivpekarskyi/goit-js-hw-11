import axios from 'axios';

export const fetchImages = async inputValue => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '32920278-ac1f185981fb853c8559f3f77';
  const filter = `?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`;
  return await axios.get(`${BASE_URL}${filter}`);
};

// import productsApi from './api';

// const fetchImages = async inputValue => {
//   return await axios
//     .get(
//       `${BASE_URL}?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
//     )
//     .then(response => {
//       if (!response.ok) {
//         if (response.status === 404) {
//           return [];
//         }
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };
