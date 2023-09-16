
const toggleMenuButton = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const maxWidth = 1024;

const handleToggleMenu = () => {
  const asideText = document.querySelector('.hero__aside-text');
  const body = document.body; // Получаем элемент body

  if (menu.classList.contains('open')) {
    asideText.style.visibility = 'visible';
    menu.style.height = '0';
    menu.style.opacity = '0';
    toggleMenuButton.classList.remove('open');
    setTimeout(() => {
      menu.classList.remove('open');
      body.style.overflow = 'auto';
    }, 500);
  } else {
    asideText.style.visibility = 'hidden';
    menu.classList.add('open');
    body.style.overflow = 'hidden';
    toggleMenuButton.classList.add('open');
    setTimeout(() => {
      menu.style.height = 'calc(100vh - 60px)';
      menu.style.opacity = '1';
    }, 0);
  }
};
toggleMenuButton.addEventListener('click', handleToggleMenu);

const handleWindowResize = () => {
  if (window.innerWidth > maxWidth) {
    menu.classList.remove('open');
    menu.style.height = '60px';
    menu.style.opacity = '1';
    toggleMenuButton.classList.remove('open');
  }
};
window.addEventListener('resize', handleWindowResize);
handleWindowResize();