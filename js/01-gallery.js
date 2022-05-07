import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.style.listStyleType = 'none';

function createGalleryItem(cards) {
    return cards.map(({ original, preview, description }) => {
        return `<li><a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li> `
    }).join('');
};

galleryEl.insertAdjacentHTML('afterbegin', createGalleryItem(galleryItems));

  const lightbox = new SimpleLightbox(`.gallery a`, {
      captions: true,
      captionsData: `alt`,
      captionsDelay: 250,
  });

