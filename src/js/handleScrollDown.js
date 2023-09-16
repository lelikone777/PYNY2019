const arrowDown = document.querySelector('.hero__arrow');

const handleScrollDown = () => {
  const form = document.getElementById('form');

  if (form) {
    form.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
arrowDown.addEventListener('click', handleScrollDown);