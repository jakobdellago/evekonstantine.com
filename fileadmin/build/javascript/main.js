$ = require ('jquery');
slick = require('slick-carousel');
window.Shuffle = require('shufflejs');
window.Cookies = require('js-cookie');
var Truncatise = require('truncatise');

$(document).ready(function() {

	var $image_slider = $('.text-image-box.content-element .image-wrapper');
	var menu_height = $(window).width()>=1280 ? 60 : 50;
	
	//menu opener
	$('.menu-opener').click( function(){
		$('.flex-wrapper').toggleClass('open');
	});

	//headerimage slide to content
	$('.header-slider .scroll-button').on('click', function(e){
	  $('html, body').animate({
	    scrollTop:$('.header-slider').height() + 26
	  },'slow');
	  e.preventDefault();
	});

	//contact button scroll handling
	$('.mobile-nav .contact-button-wrapper, .main-nav .contact-button-wrapper').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.main-container .footer').offset().top - menu_height
		},'slow');
	});
	
	//arrow scroll handling
	$('.mobile-nav .icon-wrapper .icon-arrow-down.header-view').on('click', function() {
		if($(this).hasClass('header-view')){
			$('html, body').animate({
				scrollTop: window.innerHeight - menu_height
			},'slow');
		} else {
			$('html, body').animate({
				scrollTop: 0
			},'slow');
		}
	});

	//add scrolled class to navigation
	$(window).scroll(function() {
		var top  = window.pageYOffset || document.documentElement.scrollTop;
		if (top > window.innerHeight - menu_height -1 ) {
			$('.mobile-nav .icon-wrapper .icon-arrow-down').addClass('no-header-view');
			$('.mobile-nav .icon-wrapper .icon-arrow-down').removeClass('header-view');
		} else {
			$('.mobile-nav .icon-wrapper .icon-arrow-down').addClass('header-view');
			$('.mobile-nav .icon-wrapper .icon-arrow-down').removeClass('no-header-view');
		}

		if (window.pageYOffset <= 0) {
			$('.header-wrapper.on-home').addClass('top-touch');
		} else {
			$('.header-wrapper.on-home').removeClass('top-touch');
		}
	});

	//main menu scroll handling
	$('.header .menu-points-wrapper .menu-point, .main-nav .menu-points-wrapper .menu-point').on('click', function() {
	  	var element_id = $(this).data('scroll-to-uid');
	  	var $element = $('.text-image-box.content-element.menu-point[data-menu-point-uid="' + element_id + '"]');
		$('html, body').animate({
			scrollTop :$element.offset().top - menu_height - 40 //Margin of Textbox + Height of menu div
		},'slow');
	});

	//Headerclaim scrolling
	$('.main-nav .header-wrapper.on-home, .mobile-nav .header-wrapper.on-home').on('click', function() {
		$('html, body').animate({
			scrollTop : 0
		},'slow');
	});


	$image_slider.slick({
  		infinite: true,
  		slidesToShow: 1,
        slidesToScroll: 1,
  		arrows: true,
  		nextArrow: '<div class="arrow arrow-right"><img src="fileadmin/resources/images/arrowround-transparent-right.png"></div>',
  		prevArrow: '<div class="arrow arrow-left"><img src="fileadmin/resources/images/arrowround-transparent-left.png"></div>',
	});

	//Cookiebanner behaviour close
	var show_cookiebanner = Cookies.get('show_cookiebanner');
	if(typeof show_cookiebanner === 'undefined') {
		show_cookiebanner = true;
	} else {
		show_cookiebanner = false;
	}

	if (show_cookiebanner) {
		$('.cookiebanner').removeClass('hidden');
	}

	$('.cookiebanner .icon-close').click(function() {
		$('.cookiebanner').addClass('hidden');
		if (show_cookiebanner === true){
			Cookies.set('show_cookiebanner', 1, { expires: 365 });
		}
	});


	//ANALYTICS EVENTS BEGIN
	//FOOTER BEGIN
	$('.facebook-link').click(function() {
		var url = $(this).attr('href');

		gtag('event', 'facebook', {
		  'event_category': 'social-media',
		  'event_label': url
		});
	});

	$('.instagram-link').click(function() {
		var url = $(this).attr('href');

		gtag('event', 'instagram', {
		  'event_category': 'social-media',
		  'event_label': url
		});
	});

	$('.phone-link').click(function() {
		var phone_number = $(this).attr('href');
		
		gtag('event', 'position:footer', {
		  'event_category': 'click-to-call',
		  'event_label': phone_number
		});

	});

	$('.footer .mail-link').click(function() {
		var mail_address = $(this).attr('href');

		gtag('event', 'position:footer', {
		  'event_category': 'click-to-mail',
		  'event_label': mail_address
		});
	});
	//FOOTER END

	//OUTBOUND TO SHOP from menu
	$('.mobile-nav li.last a, .main-nav li.last a').click(function() {
		gtag('event', 'position:nav-menu', {
		  'event_category': 'outbound-to-shop',
		});
	});

	//OUTBOUND TO SHOP from product-detail
	$('.product-detail .shop-button').click(function() {
		var product_name = $('.product-detail .header').text();
		var product_price = parseInt($('.product-detail .price').text());

		gtag('event', 'shop', {
		  'event_category': 'product-detail',
		  'event_label': product_name,
		  'value': product_price
		});
	});

	//MAIL from product-detail
	$('.product-detail .mail-button').click(function() {
		var product_name = $('.product-detail .header').text();
		var product_price = parseInt($('.product-detail .price').text());

		gtag('event', 'mail', {
		  'event_category': 'product-detail',
		  'event_label': product_name,
		  'value': product_price
		});
	});

		//LINK ON JAKOBDELLAGO on facebook in footer
	$('.footer .facebook-link-jakob').click(function() {

		var url = $(this).attr('href');

		gtag('event', 'facebook', {
		  'event_category': 'social-media',
		  'event_label': url
		});
	});

	//ANALYTICS EVENTS END

});

