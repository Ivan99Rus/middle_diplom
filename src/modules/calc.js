const calc = () => {
  const cardOrder = document.getElementById('card_order'),
    clubs = cardOrder.querySelectorAll('.club input'),
    time = cardOrder.querySelectorAll('.time input'),
    promo = cardOrder.querySelector('.price-message input'),
    priceTotal = document.getElementById('price-total'),
    promoText = 'ТЕЛО2019',
    locationName = location.pathname.slice(location.pathname.lastIndexOf('/'));

  const priceList = {
    'mozaika': {
      '1': 1999,
      '6': 9990,
      '9': 13900,
      '12': 9990,
      '12s': 19990
    },
    'schelkovo': {
      '1': 2999,
      '6': 14990,
      '9': 21900,
      '12': 14990,
      '12s': 24990
    }
  };

  const promoPrice = (oldPrice = priceTotal.textContent) => priceTotal.textContent = Math.ceil(oldPrice / 100 * 70);

  cardOrder.addEventListener('change', e => {
    let index,
      clubName;

    clubs.forEach(el => {
      if (el.checked) {
        clubName = el.value;
      }
    });

    time.forEach(el => {
      if (el.checked) {
        index = el.value;
      }
    });

    if (e.target.localName === 'input' && locationName === '/index.html' || locationName === '/') {
      e.target.value = e.target.value.toUpperCase();
      if (e.target.name === 'card-type') {
        index = e.target.value;
      } else if (e.target.name === 'club-name') {
        clubName = e.target.value;
      }

      if (e.target.parentNode.classList.contains('price-message')) {
        e.target.value === promoText ? promoPrice() : alert('Такого кода не существует');
      }

      if (promo.value === promoText) {
        promoPrice(priceList[clubName][index]);
      } else {
        priceTotal.textContent = priceList[clubName][index];
      }
    }
  });
};

export default calc;