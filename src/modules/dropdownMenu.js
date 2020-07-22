const dropdownMenu = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubsListElements = clubsList.querySelector('ul');

    clubsList.addEventListener('click', () => {
        clubsListElements.classList.toggle('active-block');
    });
};

export default dropdownMenu;