import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchPictures from './js/fetchPictures';

function createGalleryMarkup(fetchPictures) {
  return fetchPictures
    .map(({ original, preview, description }) => {
      return `
<div class="gallery">
  <a href="${original}">
    <img src="${preview}" alt="${description}" />
  </a>
</div>
      `;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', gallery);
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});