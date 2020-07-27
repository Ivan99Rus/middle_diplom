const scrollMenu = () => {
  const menu = document.querySelector('.popup-menu ');

  menu.addEventListener('click', e => {
    e.preventDefault();

    const sectionId = e.target.getAttribute('href');

    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};
export default scrollMenu;