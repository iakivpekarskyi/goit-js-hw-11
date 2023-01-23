// export default function createMarkup(images) {
//   const markup = images
//     .map(
//       image =>
//         `
// <div class="photo-card">
// <ion-icon name="cloud-download-outline"></ion-icon>
//  <a href="${image.largeImageURL}"><img class="photo" src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}" loading="lazy"/></a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes: ${image.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views:${image.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments:${image.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads:${image.downloads}</b>
//     </p>
//   </div>
// </div>
// `
//     )
//     .join('');
// }
