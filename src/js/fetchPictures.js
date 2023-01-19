import axios from 'axios';

const API_KEY = '32920278-ac1f185981fb853c8559f3f77';
const filters = `?key=${API_KEY}&q={value}&image_type=photo&orientation=horozontal&safesearch=true&per_page=40`;

export async function fetchPictures(inputValue) {
  try {
    const data = await axios.get(`${BASE_URL}${filters}`);
    return data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
