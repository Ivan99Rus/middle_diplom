const callbackForm = () => {
    const callbackBtn = document.querySelector('.callback-btn'),
        callbackPopup = document.getElementById('callback_form');

    callbackBtn.addEventListener('click', () => {
        callbackPopup.classList.add('active-block');
    });

    callbackPopup.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay') || e.target.classList.contains('close_icon')) {
            callbackPopup.classList.remove('active-block');
        }
    });
};

export default callbackForm;