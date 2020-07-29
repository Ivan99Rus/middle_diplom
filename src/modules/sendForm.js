import mainForm from './mainForm';

const sendForm = (form) => {
	const erorMessage = 'Что-то пошло не так...',
		laodMessage = 'Загрузка...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 2rem;';

	if (form.id === 'form2' ||
		form.id === 'form1' ||
		form.id === 'footer_form') {
		statusMessage.style.color = '#FFFFFF';
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const formData = new FormData(form);
		let body = {};
		formData.forEach((val, key) => {
			body[key] = val;
		});

		let elementsForm = [...form.elements].filter(
			e => e.type.toLowerCase() !== 'button' &&
			e.type !== 'submit' &&
			e.type !== 'hidden'
		);

		for (let key in elementsForm) {
			let elem = elementsForm[key];
			if (elem.parentNode) {
				if (elem.parentNode.classList.contains('club') && !elem.checked) {
					delete elementsForm[key];
				}
			}
		}
		elementsForm = elementsForm.filter(String);

		let valid = true;

		elementsForm.forEach(e => {
			try {
				if (e.type === 'checkbox') {
					if (!e.checked) {
						const labelCheck = e.parentNode.querySelector('label');
						labelCheck.insertAdjacentHTML('beforeEnd', '<br/> (НЕОБХОДИМО СОГЛАСИЕ)');

						labelCheck.style.color = 'red';
						labelCheck.style.fontStyle = 'italic';

						e.addEventListener('change', () => {
							if (e.checked) {
								labelCheck.textContent = `Я СОГЛАСЕН НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ`;
								labelCheck.style.color = '#fff';
								labelCheck.style.fontStyle = 'normal';
								if (e.id === 'card_check') {
									labelCheck.style.color = '#94939a';
								}
							}
						});
						throw new Error('Необходимо подтвердить согласие');
					}
				}
				if (e.classList.contains('error-input')) {
					valid = false;
					throw new Error('неверно заполненное поле');
				}
			} catch (error) {
				if (error) {
					valid = false;
				}
			}
		});

		const postData = (body) => {
			return fetch('server.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			});
		};

		const clearForm = () => {
			for (const el of form.elements) {
				if (el.id === 'callback_form-phone') {
					el.style.border = '1px solid #b7b7b7'
				}

				if (el.id === 'card_leto_mozaika') {
					el.checked = true;
				}

				if (el.id === 'm1') {
					el.checked = true;
				}

				if (el.id === 't1') {
					el.checked = true;
				}

				if (
					el.tagName.toLowerCase() !== 'button' &&
					el.type !== 'button' &&
					e.type !== 'hidden'
				) {
					el.value = '';
				}
			}
			setTimeout(() => statusMessage.remove(), 5000);
		};

		if (valid) {
			form.appendChild(statusMessage);

			statusMessage.textContent = laodMessage;

			postData(body)
				.then((response) => {
					if (response.status !== 200) {
						if (
							form.id === 'banner-form' ||
							form.id === 'footer_form'
						) {
							mainForm('#thanks', false);
							statusMessage.remove();
						} else if (
							form.id === 'form1' ||
							form.id === 'form2'
						) {
							mainForm(`#${form.id}`, false);
							statusMessage.remove();
						}
						throw new Error('status network not 200');
					} else if (
						form.id === 'banner-form' ||
						form.id === 'footer_form' ||
						form.id === 'form1' ||
						form.id === 'form2'
					) {
						mainForm('#thanks', true);
						statusMessage.remove();
					} else {
						statusMessage.textContent = successMessage;
					}
				})
				.catch((error) => {
					if (form.id !== 'banner-form' ||
						form.id !== 'footer_form') {
						statusMessage.textContent = erorMessage;
					}
					console.error(error);
				});
			clearForm();
		}
	});
};

export default sendForm;