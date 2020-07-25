const fixedMenu = () => {
	const menu = document.querySelector('.top-menu');

	if (document.body.clientWidth < 768) {
		const menuOffset = menu.offsetTop;
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > menuOffset) {
				menu.style.position = 'fixed';
			} else {
				menu.removeAttribute('style');
			}
		});
	}
};

export default fixedMenu;