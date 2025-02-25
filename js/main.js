// ===== Mobile menu script ===== \\
const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-popup');
burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

const textElement = document.querySelector('.video-bottom__right__text');
const text = textElement.textContent;
const words = text.split(' ');
let readWordsCount = 0;

textElement.innerHTML = words.map(word => `<span>${word}</span>`).join(' '); // Загортаємо кожне слово в <span>

const wordSpans = textElement.querySelectorAll('span');

function checkScroll() {
  const elementTop = textElement.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8; // Точка спрацьовування зміни кольору (80% висоти вікна)

  if (elementTop < triggerPoint && readWordsCount < words.length) {
    readWordsCount++;
    for (let i = 0; i < readWordsCount; i++) {
      wordSpans[i].classList.add('read');
    }
  }
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Перевіряємо при завантаженні сторінки




const projectItems = document.querySelectorAll('.video-top__wrapper, .video-bottom__left, .project-item, .project-item__mid, .test-top__wrapper, .test-bottom__left, .test-bottom__right, .contact-left, .contact-right');

function checkVisibility() {
  projectItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (itemTop < triggerPoint) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();