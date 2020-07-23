const gift = () => {
    const fixedGift = document.querySelector('.fixed-gift'),
        gift = document.getElementById('gift');

    fixedGift.addEventListener('click', () => {
        fixedGift.style.display = 'none';
        gift.classList.toggle('active-block');
    });

    gift.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay') ||
            e.target.classList.contains('close-btn') ||
            e.target.classList.contains('close_icon')) {
            gift.classList.remove('active-block');
        }
    });
};

export default gift;