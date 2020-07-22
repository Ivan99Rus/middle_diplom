const dropdownMenu = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubsListElements = clubsList.querySelector('ul');

    clubsList.addEventListener('click', () => {
        console.log(1);
        clubsListElements.classList.toggle('active-block');
    });
};

export default dropdownMenu;