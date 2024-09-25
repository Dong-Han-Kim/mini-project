$('#navlist li').click(function () {
	const index = $('#navlist li').index(this);
	$('#navlist li').removeClass('menu_active');
	$(this).addClass('menu_active');

	$('.iframe_case').removeClass('iframe_active');
	$('.iframe_case:eq(' + index + ')').addClass('iframe_active');
});
