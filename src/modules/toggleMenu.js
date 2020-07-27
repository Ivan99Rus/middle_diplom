const toggleMenu = () => {
  const menuButton = document.querySelector('.menu-button img'),
    popupMenu = document.querySelector('.popup-menu');

  menuButton.addEventListener('click', () => {
    popupMenu.classList.add('active-block');
  });


  popupMenu.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('scroll') || e.target.parentNode.classList.contains('close-menu-btn')) {
      popupMenu.classList.remove('active-block');
    }
  });
};

export default toggleMenu;