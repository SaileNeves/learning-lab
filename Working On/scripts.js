const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const menuList = document.getElementById('menu-list');

menuButton.addEventListener('click', () => {
  menuList.classList.add('open');
});

closeButton.addEventListener('click', () => {
  menuList.classList.remove('open');
});