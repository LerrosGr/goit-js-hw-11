import { getImages } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const list = document.querySelector('.list');
form.addEventListener('submit', handleImages);

function handleImages(e) {
  e.preventDefault();

  const input = e.target.elements.search.value.trim();
  if (input) {
    getImages(input).then(value => {
      if (value.hits.length === 0) {
        iziToast.error({
          backgroundColor: 'lightred',
          icon: false,
          progressBar: false,
          close: false,
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    });
  } else {
    iziToast.error({
      backgroundColor: 'lightred',
      icon: false,
      progressBar: false,
      close: false,
      position: 'topRight',
      message: 'Please, fill the field',
    });
  }
}
