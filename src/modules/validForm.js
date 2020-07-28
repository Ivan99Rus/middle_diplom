import maskPhone from './maskPhone';

const validForm = (selector, selectorTel) => {
	const form = document.querySelector(selector);

	maskPhone(selectorTel);

	form.addEventListener('input', e => {
		if (e.target.name === `name`) {
			if (!(/^[А-Яа-яёЁ\s]*$/g.test(e.target.value))) {
				e.target.value = e.target.value.slice(0, -1);
			}
			if (!e.target.value.trim()) {
				event.target.classList.add('error-input');
			} else {
				event.target.classList.remove('error-input');
			}
		} else if (e.target.name === `promo`) {
			if (!(/^[А-Яа-яёЁ0-9]*$/g.test(e.target.value))) {
				e.target.value = e.target.value.slice(0, -1);
			}
			if (!e.target.value.trim()) {
				event.target.classList.add('error-input');
			} else {
				event.target.classList.remove('error-input');
			}
		}
	});
};

export default validForm;