$(function(){
	// Mobile view code
	var returns = false;
	$(".mobile-view i.fa").click(function(){	
		if(returns == false){
			$(".mobile-view i.fa").removeClass("fa-bars");
			$(this).addClass("fa-times");
			returns = true;
		}else{
			$(".mobile-view i.fa").removeClass("fa-times");
			$(this).addClass("fa-bars");
			returns = false;
		}
	});
	// Mobile view responsive code
	var resMenu = false;
	$(".mobile-view i.fa").click(function(){
		if(resMenu == false){
			$(".header-area").addClass("left");
			resMenu = true;
		}else{
			$(".header-area").removeClass("left");
			resMenu = false;
		}
	});
	// Animation
	 AOS.init({
	 	duration: 1000,
        easing: 'ease-in-out-back'
    });
	// Counter
    $(".count").counterUp({
    	delay: 10,
    	time: 1000
    });
    // Isotope Filtering class add remove
    $(".list-unstyled li").click(function(){
    	$(".list-unstyled li").removeClass("active");
    	$(this).addClass("active");
    });
    // Isotope
    var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		columnWidth: '.grid-item'
	  } 
	});
	// filter items on button click
	$('ul.list-unstyled li').click(function(){
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	// Magnific Popup
	$(".portfolio-gallery").magnificPopup({
		delegate: 'a.image',
		type: 'image',
		gallery: {
			enabled: true,
		}

	});

	// Owl Carousel
	$('.carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	// SmoothScroll
	$("a").smoothScroll({
		speed: 1000
	});
	// Smooth Scroll Add Remove Class
	$(".nav-menu ul li").click(function(){
		$(".nav-menu ul li").removeClass("active");
		$(this).addClass("active");
	});
	// Back to top
	$(window).scroll(function(){
		if($(this).scrollTop() > 500){
			$(".back-top").css({"opacity":"1"});
		}else{
			$(".back-top").css({"opacity":"0"});
		}
	});
	$(".back-top").click(function(){
		$("html,body").animate({scrollTop:0},1500);
	});
});

// Typed
	var typed = new Typed('.typed', {
	  strings: [
			"Web Designer.",
			"Web Developer.",
			"Programer."
		],
		typeSpeed: 100,
		backSpeed: 100,
		loop: true
	});
// Preloader
	var load = document.querySelector(".preloader");
	function preloader(){
		load.style.display="none";
	}
	