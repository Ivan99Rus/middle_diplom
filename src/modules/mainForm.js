const mainForm = (flag) => {
	const bannerPopup = document.getElementById('thanks'),
		formContent = bannerPopup.querySelector('.form-content'),
		formHeader = formContent.querySelector('h4'),
		formText = formContent.querySelector('p');

	bannerPopup.classList.add('active-block');

	if (!flag) {
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