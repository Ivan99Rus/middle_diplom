const mainForm = (selector, flag) => {
	let bannerPopup = document.querySelector(selector),
		formText,
		formHeader;

	if (selector !== '#thanks') {
		bannerPopup.parentNode.parentNode.parentNode.classList.remove('active-block');
		bannerPopup = document.querySelector('#thanks');
		bannerPopup.classList.add('active-block');
	}
	formText = bannerPopup.querySelector('p');
	bannerPopup.classList.add('active-block');

	if (!flag) {
		formHeader = bannerPopup.querySelector('h4');
		formHeader.textContent = 'Упс...';
		formText.textContent = `Ваша заявка не отправлена.
														Попробуйте повторить попытку позже!`;
	}

	bannerPopup.addEventListener('click', (e) => {
		if (e.target.classList.contains('overlay') ||
			e.target.classList.contains('close-btn') ||
			e.target.classList.contains('close_icon')) {
			bannerPopup.classList.remove('active-block');
		}
	});
}

export default mainForm;