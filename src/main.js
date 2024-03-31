import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const list = document.querySelector('.list');
form.addEventListener('submit', handleImages);

function handleImages(e) {
  e.preventDefault();
  const input = e.target.elements.search.value.trim();
  if (input === '') {
    iziToast.error({
      backgroundColor: 'lightred',
      icon: false,
      progressBar: false,
      close: false,
      position: 'topRight',
      message: 'Please, fill the field!',
    });
    return;
  }

  getImages(input)
    .then(value => {
      console.log(value);
      if (value.hits && value.hits.length === 0) {
        iziToast.error({
          backgroundColor: 'red',
          icon: false,
          progressBar: false,
          close: false,
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      const markup = renderImages(value.hits);
      list.innerHTML('afterbegin', markup);
    })
    .catch(error => {
      console.error('Error occurred while fetching images:', error);
      iziToast.error({
        backgroundColor: 'red',
        icon: false,
        progressBar: false,
        close: false,
        position: 'topRight',
        message:
          'Sorry, an error occurred while fetching images. Please try again!',
      });
    });
  e.target.reset();
}
