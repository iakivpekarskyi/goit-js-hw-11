import { fetchImages } from './js/fetchImages';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryMarkup } from './js/gallery';

const searchInput = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.js-load');
let page = 1;

const SimpleLightboxGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

searchInput.addEventListener('submit', onSearch);
btnLoadMore.addEventListener('click', onLoad);

function onSearch(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const inputValue = event.currentTarget.searchQuery.value.trim();
  console.log(event.currentTarget.searchQuery.value);
  if (!inputValue) {
    return;
  }
  fetchImages(inputValue).then(response => {
    const result = response.data.hits.length;
    if (result === 0) {
      gallery.innerHTML = '';
      Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      gallery.innerHTML = '';
      galleryMarkup(response.data.hits);
      Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
    }
    btnLoadMore.hidden = false;
  });

  function galleryMarkup(images) {
    console.log(images);
    const markup = images
      .map(
        image =>
          `
<div class="photo-card">
<ion-icon name="cloud-download-outline"></ion-icon>
 <a href="${image.largeImageURL}"><img class="photo" src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}" loading="lazy"/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${image.likes}</b>
    </p>
    <p class="info-item">
      <b>Views:${image.views}</b>
    </p>
    <p class="info-item">
      <b>Comments:${image.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads:${image.downloads}</b>
    </p>
  </div>
</div>
`
      )
      .join('');
    gallery.innerHTML = markup;
    SimpleLightboxGallery.refresh();
  }
}

function onLoad() {
  page += 1;
  fetchImages(page).then(data => console.log(data));
}
