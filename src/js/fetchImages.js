import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32920278-ac1f185981fb853c8559f3f77';

export const fetchImages = async inputValue => {
  console.log(fetchImages);
  return await axios
    .get(
      `${BASE_URL}?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
    )
    .then(async response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return await response.json();
    });
};
