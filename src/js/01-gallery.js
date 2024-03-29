
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
import  SimpleLightbox  from "simplelightbox";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryCreateFunction = createGalleryList(galleryItems);




function createGalleryList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>`
    } ).join('')
}
galleryEl.innerHTML = galleryCreateFunction;
const lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: "bottom",
    captionDelay: 250,
    captionType: "attr",
    disableScroll: true,
    captionsData: "alt",
});