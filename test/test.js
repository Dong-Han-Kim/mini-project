const header = document.querySelector('#header');
const liItems = document.querySelectorAll('.li1');
const headerHeight = header.getBoundingClientRect().height;

// navbar background color 천천히 변경
document.addEventListener('scroll', () => {
	if (window.scrollY > headerHeight) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
});

// 메뉴 리스트를 천천히 내려오게 하는 코드
liItems.forEach((li) => {
	li.addEventListener('mouseenter', () => {
		const ul2 = li.querySelector('.ul2');
		const ul2Height = ul2.scrollHeight; // 실제 높이를 가져옴
		ul2.style.height = ul2Height + 'px'; // 실제 높이로 설정
	});

	li.addEventListener('mouseleave', () => {
		const ul2 = li.querySelector('.ul2');
		ul2.style.height = '0'; // 높이를 0으로 설정하여 닫힘 효과
	});
});

// menu를 클릭했을 때 hover효과 유지
const navLinks = document.querySelectorAll('.li1 a');

document.addEventListener('DOMContentLoaded', () => {
	const activeLink = localStorage.getItem('activeLink');
	if (activeLink) {
		const link = document.querySelector(`a[href="${activeLink}"]`);
		if (link) {
			link.classList.add('li1_active');
		}
	}
});

navLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		localStorage.setItem('activeLink', link.getAttribute('href'));
		navLinks.forEach((nav) => nav.classList.remove('li1_active'));

		link.classList.add('li1_active');
	});
});
