const signUpFreeSession = () => {
  const freeVisit = document.querySelector('.free-visit'),
    freeVisitPopup = document.getElementById('free_visit_form');

  freeVisit.addEventListener('click', () => {
    freeVisitPopup.classList.add('active-block');
  });

  freeVisitPopup.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay') || e.target.classList.contains('close_icon')) {
      freeVisitPopup.classList.remove('active-block');
    }
  });
};

export default signUpFreeSession;