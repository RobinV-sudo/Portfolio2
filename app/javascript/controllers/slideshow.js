const photos = document.querySelectorAll('.photo');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentPhotoIndex = 0;

function showPhoto(index) {
  photos.forEach((photo, i) => {
    if (i === index) {
      photo.style.opacity = 1;
    } else {
      photo.style.opacity = 0;
    }
  });
}

prevButton.addEventListener('click', () => {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  showPhoto(currentPhotoIndex);
});

nextButton.addEventListener('click', () => {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  showPhoto(currentPhotoIndex);
});

showPhoto(currentPhotoIndex);
