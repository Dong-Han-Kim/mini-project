const menuLi = document.querySelectorAll('#navlist li');
const iframeCase = document.querySelectorAll('.iframe_case');

console.log(Array.from(menuLi));

function activeHandler(e) {
	const targetMenu = Array.from(menuLi).indexOf(e.currentTarget);

	menuLi.forEach((item) => item.classList.remove('menu_active'));
	if (targetMenu !== -1) {
		menuLi[targetMenu].classList.add('menu_active');
	}

	iframeCase.forEach((item) => item.classList.remove('iframe_active'));
	if (targetMenu !== -1) {
		iframeCase[targetMenu].classList.add('iframe_active');
	}
}

menuLi.forEach((item) => item.addEventListener('click', (e) => activeHandler(e)));
