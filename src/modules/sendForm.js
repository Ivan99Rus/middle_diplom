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

		let elementsForm = [...form.elements].filter(
			e => e.type.toLowerCase() !== 'button' &&
			e.type !== 'submit' &&
			e.type !== 'hidden'
		);

		for (let key in elementsForm) {
			let elem = elementsForm[key];
			if (elem.parentNode.classList.contains('club') && !elem.checked) {
				delete elementsForm[key];
			}
		}
		elementsForm = elementsForm.filter(String);

		let valid = true;

		elementsForm.forEach(e => {
			try {
				if (e.type === 'checkbox') {
					if (!e.checked) {
						alert('Необходимо подтвердить согласие!');
						throw new Error('Необходимо подтвердить согласие');
					}
				}
				if (e.classList.contains('error-input')) {
					valid = false;
					throw new Error('неверно заполненное поле');
				}
			} catch (error) {
				if (error) {
					console.error(error);
					valid = false;
				}
			}
		});

		const postData = (formData) => {
			return fetch('server.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: formData
			});
		};

		const clearForm = () => {
			for (const el of form.elements) {
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
			console.log('form: ', form);

			statusMessage.textContent = laodMessage;

			postData(formData)
				.then((response) => {
					if (response.status !== 200) {
						if (form.id === 'banner-form' ||
							form.id === 'footer_form') {
							mainForm(false);
							statusMessage.remove();
						}
						throw new Error('status network not 200');
					} else if (form.id === 'banner-form' ||
						form.id === 'footer_form') {
						mainForm(true);
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