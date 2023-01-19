import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32920278-ac1f185981fb853c8559f3f77';
const filters = `?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`;

export default async function fetchPictures(inputValue) {
  try {
    const data = await axios.get(`${BASE_URL}${filters}`);
    console.log(data);
    return data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
