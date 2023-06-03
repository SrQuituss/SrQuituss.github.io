
const botonInicio = document.getElementById('btn-inicio');

botonInicio.addEventListener('click', function() {
    window.location.href = 'index.html';
});

const optionsContainer = document.querySelector('.options');
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const options = Array.from(document.querySelectorAll('.option'));
let currentIndex = 1;
const optionWidth = options[0].offsetWidth;

previousButton.addEventListener('click', scrollOptions.bind(null, 'previous'));
nextButton.addEventListener('click', scrollOptions.bind(null, 'next'));

function scrollOptions(direction) {
  if (direction === 'previous') {
    if (currentIndex > 0) {
      currentIndex--;
    }
  } else {
    if (currentIndex < options.length - 1) {
      currentIndex++;
    }
  }

  const scrollPosition = (currentIndex - 1) * optionWidth;
  optionsContainer.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });

  updateOptionsVisibility();
}

function updateOptionsVisibility() {
  options.forEach((option, index) => {
    option.classList.remove('selected');

    if (index >= currentIndex - 1 && index <= currentIndex + 1) {
      option.style.opacity = '1';
      if (index === currentIndex) {
        option.classList.add('selected');
      }
    } else {
      option.style.opacity = '0.5';
    }
  });
}

updateOptionsVisibility();