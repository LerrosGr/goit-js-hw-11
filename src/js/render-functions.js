export function renderImages(imagesArr) {
  return imagesArr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="list-item">
     <a class="gallery-link" href ="${largeImageURL}"
      <img src="${webformatURL}" alt="${tags}" class="gallery-image" /> </a>
      <ul class="information-container">
        <li class="item-information-container"><p><span class="accent">Likes</span></br>${likes}</p></li>
        <li class="item-information-container"><p><span class="accent">Views</span></br>${views}</p></li>
        <li class="item-information-container"><p><span class="accent">Comments</span></br>${comments}</p></li>
        <li class="item-information-container"><p><span class="accent">Downloads</span></br>${downloads}</p></li>
        </ul>
    </li>`;
      }
    )
    .join('');
}
