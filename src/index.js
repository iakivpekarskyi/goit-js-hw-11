import { fetchImages } from './js/fetchImages';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchInput = document.querySelector('.search-form__input');
const btnSearch = document.querySelector('.search-form__button');
const gallery = document.querySelector('.gallery');

btnSearch.addEventListener('click', onSearch);

function onSearch(event) {
  event.preventDefault();
  const inputValue = searchInput.value.trim();
  if (!inputValue !== '') {
    fetchImages(inputValue);
    return;
  }
}

// fetchPictures(searchInput).then(pictures => {
//   Notify.info('Hooray! We found ${totalHits} images.');
//   return;
// });

//   function createGalleryMarkup(fetchPictures) {
//     return fetchPictures
//       .map(({ original, preview, description }) => {
//         return `
// <div class="gallery">
//   <a href="${original}">
//     <img src="${preview}" alt="${description}" />
//   </a>
// </div>
//       `;
//       })
//       .join('');
//   }

//   galleryContainer.insertAdjacentHTML('beforeend', gallery);
//   const lightbox = new SimpleLightbox('.gallery a', {
//     captionDelay: 250,
//     captionsData: 'alt',
//   });
//
