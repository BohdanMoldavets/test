let startPosition = 0;
const sliderLine = document.querySelector('.slider-line');
// const buttonNext = document.querySelector('.button-next');

document.querySelector('.button-next').addEventListener('click', function () {
    startPosition += 256;
    if (startPosition > 512) {
        startPosition = 0;
    }
    sliderLine.style.left = `${-startPosition}px`;
});

document.querySelector('.button-prev').addEventListener('click', function () {
    startPosition -= 256;
    if (startPosition < 0) {
        startPosition = 512;
    }
    sliderLine.style.left = `${-startPosition}px`;
});


