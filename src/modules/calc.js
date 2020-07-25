const calc = () => {
  const cardOrder = document.getElementById('card_order'),
    clubs = cardOrder.querySelectorAll('.club input'),
    time = cardOrder.querySelectorAll('.time input'),
    priceTotal = document.getElementById('price-total');

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

  cardOrder.addEventListener('click', e => {
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

    if (e.target.localName === 'input') {
      if (e.target.name === 'card-type') {
        index = e.target.value;
      } else if (e.target.name === 'club-name') {
        clubName = e.target.value;
      }
    };
    priceTotal.textContent = priceList[clubName][index];
  });
};

export default calc;