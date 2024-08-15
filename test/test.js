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

let windowWidth;
// let index = 0;
// let sw = 1;

$(window).resize(function () {
	windowWidth = $(window).width();
	// 현재 슬라이드 위치 재조정
	// let marginLeftValue = -index * windowWidth + 'px';
	$('.slides').css('margin-left', '0px');
});

$(function () {
	windowWidth = $(window).width();
	setInterval(function () {
		$('.slides > img:first-of-type').animate(
			{
				'margin-left': -windowWidth + 'px',
			},
			1000,
			function () {
				$('.slides > img:first-of-type').append('.slides');
				$('.slides').css('margin-left', '0px');
			}
		);
	}, 2000);
});

// $(document).ready(function () {
// 	let currentIndex = 0;
// 	const slideCount = $('.carousel .slides img').length;
// 	const slideWidth = $('.carousel').width();
// 	const $slides = $('.carousel .slides');

// 	$slides.append($slides.children().first().clone());

// 	$slides.css('width', (slideCount + 1) * slideWidth + 'px');

// 	function goToSlide(index) {
// 		$slides.css('margin-left', -index * slideWidth + 'px');
// 	}

// 	function nextSlide() {
// 		currentIndex = (currentIndex + 1) % slideCount;
// 		goToSlide(currentIndex);

// 		if (currentIndex === slideCount) {
// 			setTimeout(function () {
// 				$slides.css('transition', 'none');
// 				$slides.css('margin-left', '0px');
// 				currentIndex = 0;
// 			}, 1000); // Timeout duration should match the animation duration
// 		}
// 	}

// 	function prevSlide() {
// 		currentIndex = (currentIndex - 1 + slideCount) % slideCount;
// 		goToSlide(currentIndex);
// 	}

// 	$('.control-next').click(function () {
// 		nextSlide();
// 	});

// 	$('.control-prev').click(function () {
// 		prevSlide();
// 	});

// 	// 자동 슬라이드
// 	setInterval(function () {
// 		nextSlide();
// 	}, 3000);

// 	// 윈도우 리사이즈시 슬라이드 위치 재조정
// 	$(window).resize(function () {
// 		$slides.children().css('width', $('.carousel').width() + 'px');
// 		goToSlide(currentIndex);
// 	});
// });
