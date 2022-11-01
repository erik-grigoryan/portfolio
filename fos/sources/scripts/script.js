$(document).ready(function () {
	$('.main-category-slider').owlCarousel({
		loop: false,
		autoWidth: true,
		margin: 0,
		nav: true,
		dots: false,
	});
	
	$('.hero-slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		items: 1
	});
	
	$('.weekly-supplier').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		items: 1
	});
	
	$('.single-prod-secondary-slider').owlCarousel({
		loop: false,
		margin: 0,
		nav: true,
		dots: false,
		items: 4,
		mouseDrag: false,
		pullDrag: false,
		touchDrag: false
	});
	
	$('.product-slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 2
			},
			501: {
				items: 3
			},
			769: {
				items: 4
			},
			1025: {
				items: 6
			}
		}
	});
});