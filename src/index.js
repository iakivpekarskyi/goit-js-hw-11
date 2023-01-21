import { fetchImages } from './js/fetchImages';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchInput = document.querySelector('#search-form');

// const gallery = document.querySelector('.gallery');

searchInput.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.searchQuery.value;
  if (!inputValue !== '') {
    fetchImages();
    return;
  }
}

fetchImages(inputValue).then(response => {
  const result = response.data.hits;
  console.log(result);
  if (result === 0) {
    Notify.warning(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else {
    // galleryMarkup(data.hits);
    Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
  }
});
