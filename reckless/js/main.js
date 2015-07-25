/*!
 * Reckless Template (http://themeforest.net/users/imangm)
 * Copyright 2014 ImanGM
 */
 
var $ = jQuery.noConflict();
$(window).bind('resize', function ($) {
	"use strict";
	// Load Functions
	// Close opened collapsed menu in responsive window resize
	if ( window.innerWidth > 768 ) {
		jQuery('#main-menu').collapse('hide');
	}
});

$(window).load(function () {
	"use strict";
	// Load Functions
});

$(document).ready(function ($) {

	// initialize smoothscroll
	try {
		jQuery.browserSelector();
		// Adds window smooth scroll on chrome.
		if(jQuery("html").hasClass("chrome")) {
			jQuery.smoothScroll();
		}
	} catch(err) {

	}
	
	// initialise superfish
	try {
		var sfMenu = $('#main-menu').superfish({
			//add options here if required
			delay: 200,
			speed: 'fast'
		});

		// buttons to demonstrate Superfish's public methods
		$('.destroy').on('click', function(){
			sfMenu.superfish('destroy');
		});

		$('.init').on('click', function(){
			sfMenu.superfish();
		});

		$('.open').on('click', function(){
			sfMenu.children('li:first').superfish('show');
		});

		$('.close').on('click', function(){
			sfMenu.children('li:first').superfish('hide');
		});
	} catch(err) {
	
	}
	
	/*-------------------------------------------------*/
	/* =  Testimonials OWL Carousel
	/*-------------------------------------------------*/	

	try {
		$(".testimonials-slider").owlCarousel({
			autoplay: true,
			autoplayTimeout: 15000,
			nav:false,
			autoplayHoverPause: false,
			dots: true,
			items : 1,
			singleItem : true,
			autoHeight : true,
			animateOut: 'fadeOutDown',
			animateIn: 'fadeInUp',
			loop: true
		});
	} catch(err) {
	
	}

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/
	
	var winDow = $(window);
	// Needed variables
	var $container=$('.portfolio-container');
	var $filter=$('.portfolio-filter');

	try{
		$container.imagesLoaded( function(){
			$container.fadeIn(1000).isotope({
				filter:'*',
				layoutMode:'fitRows',
				transitionDuration: '0.8s',
				hiddenStyle: {
					opacity: 0,
					transform: 'scale(0.001)'
				},
				visibleStyle: {
					opacity: 1,
					transform: 'scale(1)'
				}					
			});
		});
	} catch(err) {
	}

	winDow.bind('resize', function(){
		var selector = $filter.find('a.active').attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear'
				}
			});
		} catch(err) {
		}
		return false;
	});
	
	// Isotope Filter 
	$filter.find('a').click(function(){
		var selector = $(this).attr('data-filter');

		//try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		//} catch(err) {

		//}
		return false;
	});


	var filterItemA	= $('.portfolio-filter a');
	filterItemA.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemA.removeClass('active');
			$this.addClass('active');
		}
	});

	/*-------------------------------------------------*/
	/* =  Clients  Carousel
	/*-------------------------------------------------*/	

	try {
		var clientslide = $(".clients-container").bxSlider({
			minSlides: 1,
			maxSlides: 3,
			slideWidth: 300,
			slideMargin: 0,
			controls: false,
			pager: false
		});
	} catch(err) {
	
	}

	winDow.bind('resize', function(){

		try {
			clientslide.reloadSlider();
		} catch(err) {
		}
		return false;
	});		
	
	/*-------------------------------------------------*/
	/* =  Image Boxes
	/*-------------------------------------------------*/	

	try {
		$(".images-boxes").owlCarousel({
			autoplay: true,
			autoplayTimeout: 5000,
			nav:true,
			autoplayHoverPause: true,
			dots: false,
			items : 4,
			singleItem : false,
			autoHeight : true,
			loop: true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				480:{
					items:2,
					nav:true
				},
				800:{
					items:3,
					nav:true,
				},
				1000:{
					items:4,
					nav:true,
				}
			}
		});
	} catch(err) {
	
	}
	
	/* PrettyPhoto Init */
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		hook: 'data-gal',
		social_tools: false
	});
	
	/*-------------------------------------------------*/
	/* =  Accordions
	/*-------------------------------------------------*/	
	
	var clickElem = $('.accordion-title');

	clickElem.on('click', function(e){
		e.preventDefault();
		
		var $this = $(this),
			parentCheck = $this.parent('.accordion-item'), 
			accordContainer = $this.parent('div').parent('div'),
			accordItems = accordContainer.find('.accordion-item'),
			accordContent = accordContainer.find('.accordion-content');
			
			
		if( !parentCheck.hasClass('active')) {
			// Close active accordions and open current accordion
			accordContent.slideUp(400, function(){
				accordItems.removeClass('active');
			});
			parentCheck.find('.accordion-content').slideDown(400, function(){
				parentCheck.addClass('active');
			});

		} else {
			// Close the open accordion ( User clicked it while it's open )
			accordContent.slideUp(400, function(){
				accordItems.removeClass('active');
			});

		}
	});
	
	jQuery('.accordions-box').not('.faq').each( function() {
		jQuery(this).find('.accordion-content:eq(0)').slideDown(400, function(){});
		jQuery(this).find('.accordion-item:eq(0)').addClass('active');
	});	

	/* ---------------------------------------------------------------------- */
	/*	Tabs
	/* ---------------------------------------------------------------------- */
	
	// Set the default height for each iconned-tab
	var sameHeightTabs = 1; // 0: tab content section height only (shorter tab contents not visible; 1: tab items height; 2: off / dynamic height for each tab

	$('.tab-box').each( function() {
		var largest_height = 200;
		$(this).find('.tab-content-section .tab-item-content').each( function() {
			if ( $(this).outerHeight() > largest_height ) {
				largest_height = $(this).outerHeight();
			}
		});
		if ( sameHeightTabs != 2 ) {
			$(this).find('.tab-content-section').animate({ 'height' : largest_height + 60});
			if ( sameHeightTabs == 1 ) {
				$(this).find('.tab-content-section .tab-item-content').each( function() {
					$(this).animate({ 'height' : largest_height + 30});
				});
			}
		}
	});

	$('.tab-nav li a').on('click', function(e){
		var clickTab = $('.tab-nav li');
		e.preventDefault();

		var $this = $(this),
			hisIndex = $this.parent('li').index(),
			tabContainer = $this.parent('li').parent('ul').parent('div'),
			tabCont = tabContainer.find('.tab-content-section'),
			tabContIndex = tabContainer.find(".tab-item-content:eq(" + hisIndex + ")");
			
		if( !$this.parent().hasClass('active')) {
			
			tabContainer.find(clickTab).each( function() { 
				$(this).removeClass('active');
			});
			$this.parent().addClass('active');

			tabCont.find(".tab-item-content").slideUp(1200);
			tabCont.find(".tab-item-content").removeClass('active');
			tabContIndex.delay(500).slideDown(400);
			tabContIndex.addClass('active');
		}
	});

	jQuery('.tab-box').each( function() {
		jQuery(this).find('.tab-item-content:eq(0)').slideDown(400, function(){});
		jQuery(this).find('.tab-item-content:eq(0)').addClass('active');
	});	

	/* Count To */
	// start all the timers
	$('.count-counter').data('countToOptions', {
		formatter: function (value, options) {
			return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		}
	});

	$('.count-counter').each(count);


	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}	

	/* Animated Progress Bars */
	jQuery('.progress-bar-item').each( function() {
		var percent = jQuery(this).attr('data-percent');
		jQuery(this).find('.progress-percentage').text(percent + '%');
		jQuery(this).find('.progress-done').width(percent + '%');
	});
	
	/* Google Map */
	function init_map(){
		var myOptions = {
			zoom:16,
			center:new google.maps.LatLng(-37.817314,144.95543099999998),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			disableDefaultUI: true
		};
		map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
		marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(-37.817314, 144.95543099999998)
		});
		infowindow = new google.maps.InfoWindow({
			content:"<b>Envato Pty Ltd</b><br/>121 King Street<br/> Melbourne"
		});
		google.maps.event.addListener(marker, "click", function(){
			infowindow.open(map,marker);
		});
		infowindow.open(map,marker);
	}
	
	if ($('#gmap_canvas').length > 0) {
		google.maps.event.addDomListener(window, 'load', init_map);
	}
	
	/*-------------------------------------------------*/
	/* =  OWL Slider
	/*-------------------------------------------------*/	

	try {
		$('.owl-slider-container').imagesLoaded( function(){
			$('.owl-slider').owlCarousel({
				autoplay: false,
				autoplayTimeout: 5000,
				nav:true,
				autoplayHoverPause: false,
				dots: false,
				items : 1,
				singleItem : true,
				autoHeight : true,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				loop: true
			});
		});
	} catch(err) {
	
	}
	
	/*-------------------------------------------------*/
	/* =  Related Posts
	/*-------------------------------------------------*/	

	try {
		$(".related-posts-slider.tmq-3-cols").owlCarousel({
			autoplay: false,
			autoplayTimeout: 5000,
			nav:false,
			autoplayHoverPause: true,
			dots: false,
			items : 3,
			margin: 10,
			singleItem : false,
			autoHeight : true,
			loop: true,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				480:{
					items:2,
					nav:false
				},
				1000:{
					items:3,
					nav:false,
				}
			}
		});
		
		$(".related-posts-slider.tmq-4-cols").owlCarousel({
			autoplay: false,
			autoplayTimeout: 5000,
			nav:false,
			autoplayHoverPause: true,
			dots: false,
			items : 4,
			margin: 10,
			singleItem : false,
			autoHeight : true,
			loop: true,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				480:{
					items:2,
					nav:false
				},
				1000:{
					items:4,
					nav:false,
				}
			}
		});
	} catch(err) {
	
	}

	$('.related-post-item').hover(
		function() {
			$(this).find('.related-post-content p').animate({opacity: 'show' , height: 'show', margin: 'show', padding: 'show'}, 500);
		}, function() {
			$(this).find('.related-post-content p').animate({opacity: 'hide' , height: 'hide', margin: 'hide', padding: 'hide'}, 500);
		}
	);	
	
	/*-------------------------------------------------*/
	/* =  Bootstrap Tooltip
	/*-------------------------------------------------*/
	$(document).ready(function(){
		$('[data-toggle="portfolio-tooltip"]').tooltip({placement: 'bottom', container: '.portfolio-text-banner'}); 
	});
		
	
	/*-------------------------------------------------*/
	/* =  Scroll to TOP
	/*-------------------------------------------------*/

	var animateTopButton = $('.go-top'),
		htmBody = $('html, body');
		
	animateTopButton.click(function(){
	htmBody.animate({scrollTop: 0}, 'slow');
		return false;
	});	
	
});
