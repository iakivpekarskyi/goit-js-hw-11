import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const searchInput = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');
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
  const inputValue = searchInput.searchQuery.value.trim();
  console.log(event.currentTarget.searchQuery.value);
  if (!inputValue) {
    return;
  }
  pixabayAPI(inputValue, page);
}

async function pixabayAPI(name, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const options = {
    params: {
      key: '32920278-ac1f185981fb853c8559f3f77',
      q: name,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 40,
    },
  };

  try {
    const response = await axios.get(BASE_URL, options);
    const result = response.data.hits.length;
    const images = response.data.hits;

    if (result === 0) {
      Notify.warning(
        `Sorry, there are no images matching your search query. Please try again.`
      );
    } else {
      Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
      createMarkup(images);
    }
    btnLoadMore.hidden = false;
  } catch (error) {
    console.log(error);
  }
}

function createMarkup(images) {
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
  gallery.insertAdjacentHTML('beforeend', markup);
  SimpleLightboxGallery.refresh();
}

function onLoad() {
  const name = searchInput.querySelector('input').value.trim();
  pixabayAPI(name, page);
  page += 1;
  createMarkup(images);
}
