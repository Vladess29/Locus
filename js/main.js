// ===== Mobile menu script ===== \\
const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-popup');
burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});