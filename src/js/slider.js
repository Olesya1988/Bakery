export default function switchSlider() {
  const next = document.querySelector('.next');
  const previous = document.querySelector('.previous');
  const mainImage = document.querySelector('.main-image__item');
  const images = Array.from(document.querySelectorAll('.slider__item'));

  let activeImage;
  let activeIndex;

  previous.addEventListener('click', () => {
    activeIndex = images.indexOf(document.querySelector('.active'));
    images[activeIndex].classList.remove('active');
    activeIndex--;

    if (activeIndex < 0) {
      activeIndex = images.length - 1;
    }

    images[activeIndex].classList.add('active');
    activeImage = document.querySelector('.active').querySelector('img');
    mainImage.src = activeImage.src;
  });

  next.addEventListener('click', () => {
    activeIndex = images.indexOf(document.querySelector('.active'));
    images[activeIndex].classList.remove('active');
    activeIndex++;

    if (activeIndex > images.length - 1) {
      activeIndex = 0;
    }

    images[activeIndex].classList.add('active');
    activeImage = document.querySelector('.active').querySelector('img');
    mainImage.src = activeImage.src;
  });
}
