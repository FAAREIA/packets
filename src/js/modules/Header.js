const openClose = (e) => {
	const target = e.currentTarget.dataset.open;

	if (target === 'open-nav') document.body.classList.toggle('no-scroll');
	return header.classList.toggle(target);
};

burger.addEventListener('click', openClose);
search.addEventListener('click', openClose);

export default openClose;
