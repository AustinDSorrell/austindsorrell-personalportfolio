const menuProperty = document.querySelector('.menuButton');
const hero = document.querySelector('.hero');

menuProperty.addEventListener('click', () => {
  menuProperty.classList.mainMenu('active');
  hero.classList.mainMenu('active');
})