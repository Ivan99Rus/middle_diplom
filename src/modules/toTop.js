const toTop = () => {
  const totop = document.getElementById('totop'),
    headerMain = document.querySelector('.header-main'),
    headerMainHeight = headerMain.clientHeight;

  totop.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerMainHeight) {
      totop.style.display = 'block';
    } else {
      totop.style.display = 'none';
    }
  });
};

export default toTop;