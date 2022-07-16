(function($) {
	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	}

	function backgroundImage() {
		var databackground = $('[data-background]');
		databackground.each(function() {
			if ($(this).attr('data-background')) {
				var image_path = $(this).attr('data-background');
				$(this).css({
					'background': 'url(' + image_path + ')'
				});
			}
		});
	}

	function parallax() {
		$('.bg--parallax').each(function() {
			var el = $(this),
				xpos = "50%",
				windowHeight = $(window).height();
			if (isMobile.any()) {
				$(this).css('background-attachment', 'scroll');
			} else {
				$(window).scroll(function() {
					var current = $(window).scrollTop(),
						top = el.offset().top,
						height = el.outerHeight();
					if (top + height < current || top > current + windowHeight) {
						return;
					}
					el.css('backgroundPosition', xpos + " " + Math.round((top - current) * 0.2) + "px");
				});
			}
		});
	}

	function menuBtnToggle() {
		var toggleBtn = $('.menu-toggle'),
			sidebar = $('.header--sidebar'),
			menu = $('.menu');
		toggleBtn.on('click', function(event) {
			var self = $(this);
			self.toggleClass('active');
			$('.ps-main, .header').toggleClass('menu--active');
			sidebar.toggleClass('active');
		});
	}

	function subMenuToggle() {
		$('body').on('click', '.header--sidebar .menu .menu-item-has-children > a', function(event) {
			event.preventDefault();
			var current = $(this).parent('.menu-item-has-children')
			current.children('.sub-menu').slideToggle(350);
			current.children('.mega-menu').slideToggle(350);
			current.siblings().find('.sub-menu').slideUp(350);
			current.siblings().find('.mega-menu').slideUp(350);
		});
	}

	function resizeHeader() {
		var header = $('.header'),
			headerSidebar = $('.header--sidebar'),
			menu = $('.menu'),
			checkPoint = 1200,
			windowWidth = $(window).innerWidth();
		// mobile
		if (checkPoint > windowWidth) {
			$('.menu').find('.sub-menu').hide();
			menu.find('.menu').addClass('menu--mobile');
			menu.prependTo('.header--sidebar');
			$('.ps-sticky').addClass('desktop');
		}
		else {
			$('.menu').find('.sub-menu').show();
			header.removeClass('header--mobile');
			menu.prependTo('.navigation__column.center');
			menu.removeClass('menu--mobile');
			$('.header--sidebar').removeClass('active');
			$('.ps-main, .header').removeClass('menu--active');
			$('.menu-toggle').removeClass('active');
			$('.ps-sticky').removeClass('desktop');
		}
		/*logo*/
		if (windowWidth < 480) {
			$('.ps-search--header').prependTo('.header--sidebar');
		}
		else {
			$('.ps-search--header').insertBefore('.ps-cart');
		}
	}

	function stickyHeader() {
		var header = $('.header'),
			scrollPosition = 0,
			headerTopHeight = $('.header .header__top').outerHeight(),
			checkpoint = 300;
		$(window).scroll(function() {
			var currentPosition = $(this).scrollTop();
			if (currentPosition < scrollPosition) {
				// On top
				if (currentPosition == 0) {
					header.removeClass('navigation--sticky navigation--unpin navigation--pin');
					header.css("margin-top", 0);
				}
				// on scrollUp
				else if (currentPosition > checkpoint) {
					header.removeClass('navigation--unpin').addClass('navigation--sticky navigation--pin');
				}
			}
			// On scollDown
			else {
				if (currentPosition > checkpoint) {
					header.addClass('navigation--unpin').removeClass('navigation--pin');
					header.css("margin-top", -headerTopHeight);
				}
			}
			scrollPosition = currentPosition;
		});
	}

	function owlCarousel(target) {
		if (target.length > 0) {
			target.each(function() {
				var el = $(this),
					dataAuto = el.data('owl-auto'),
					dataLoop = el.data('owl-loop'),
					dataSpeed = el.data('owl-speed'),
					dataGap = el.data('owl-gap'),
					dataNav = el.data('owl-nav'),
					dataDots = el.data('owl-dots'),
					dataAnimateIn = (el.data('owl-animate-in')) ? el.data('owl-animate-in') : '',
					dataAnimateOut = (el.data('owl-animate-out')) ? el.data('owl-animate-out') : '',
					dataDefaultItem = el.data('owl-item'),
					dataItemXS = el.data('owl-item-xs'),
					dataItemSM = el.data('owl-item-sm'),
					dataItemMD = el.data('owl-item-md'),
					dataItemLG = el.data('owl-item-lg'),
					dataNavLeft = (el.data('owl-nav-left')) ? el.data('owl-nav-left') : "<i class='ps-icon-back'></i>",
					dataNavRight = (el.data('owl-nav-right')) ? el.data('owl-nav-right') : "<i class='ps-icon-next'></i>",
					duration = el.data('owl-duration'),
					datamouseDrag = (el.data('owl-mousedrag') == 'on') ? true : false;
				el.owlCarousel({
					animateIn: dataAnimateIn,
					animateOut: dataAnimateOut,
					margin: dataGap,
					autoplay: dataAuto,
					autoplayTimeout: dataSpeed,
					autoplayHoverPause: true,
					loop: dataLoop,
					nav: dataNav,
					mouseDrag: datamouseDrag,
					touchDrag: true,
					autoplaySpeed: duration,
					navSpeed: duration,
					dotsSpeed: duration,
					dragEndSpeed: duration,
					navText: [dataNavLeft, dataNavRight],
					dots: dataDots,
					items: dataDefaultItem,
					responsive: {
						0: {
							items: dataItemXS
						},
						480: {
							items: dataItemSM
						},
						768: {
							items: dataItemMD
						},
						992: {
							items: dataItemLG
						},
						1200: {
							items: dataDefaultItem
						}
					}
				});
			});
		}
	}

	function navigateOwlCarousel() {
		var container = $('.ps-owl-root'),
			owl = $('.ps-owl--colection'),
			prev = container.find('.ps-owl-actions .ps-prev'),
			next = container.find('.ps-owl-actions .ps-next');
		if (container.length > 0) {
			prev.on('click', function(e) {
				e.preventDefault();
				owl.trigger('prev.owl.carousel', [300]);
			})
			next.on('click', function(e) {
				e.preventDefault();
				owl.trigger('next.owl.carousel');
			});
		}
	}

	function countDown() {
		var time = $(".ps-countdown");
		time.each(function() {
			var el = $(this),
				value = $(this).data('time');
			var countDownDate = new Date(value).getTime();
			var timeout = setInterval(function() {
				var now = new Date().getTime(),
					distance = countDownDate - now;
				var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
					hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
					minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
					seconds = Math.floor((distance % (1000 * 60)) / 1000);
				// el.find('.days').html(days);
				el.find('.hours').html(days * 24 + hours);
				el.find('.minutes').html(minutes);
				el.find('.seconds').html(seconds);
				if (distance < 0) {
					clearInterval(timeout);
					el.closest('.ps-section').hide();
				}
			}, 1000);
		});
	}

	function masonry() {
		var masonryTrigger = $('.ps-masonry');
		if (masonryTrigger.length > 0) {
			masonryTrigger.imagesLoaded(function() {
				masonryTrigger.isotope({
					columnWidth: '.grid-sizer',
					itemSelector: '.grid-item'
				});
			});
			var filters = masonryTrigger.closest('.masonry-root').find('.ps-masonry__filter > li > a');
			filters.on('click', function() {
				var selector = $(this).attr('data-filter');
				filters.find('a').removeClass('current');
				$(this).parent('li').addClass('current');
				$(this).parent('li').siblings('li').removeClass('current');
				console.log($(this));
				masonryTrigger.isotope({
					itemSelector: '.grid-item',
					isotope: {
						columnWidth: '.grid-sizer'
					},
					filter: selector
				});
				return false;
			});
		}
	}

	function rating() {
		$('.ps-rating').barrating({
			theme: 'fontawesome-stars'
		});
	}

	function mapConfig() {
		$.gmap3({
			key: 'AIzaSyAx39JFH5nhxze1ZydH-Kl8xXM3OK4fvcg'
		});
		var map = $('#contact-map');
		if (map.length > 0) {
			map.gmap3({
				address: map.data('address'),
				zoom: map.data('zoom'),
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				styles: [{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [{ "visibility": "on" }, { "lightness": 33 }]
				}, {
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [{ "color": "#f2e5d4" }]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{ "color": "#c5dac6" }]
				}, {
					"featureType": "poi.park",
					"elementType": "labels",
					"stylers": [{ "visibility": "on" }, { "lightness": 20 }]
				}, {
					"featureType": "road",
					"elementType": "all",
					"stylers": [{ "lightness": 20 }]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{ "color": "#c5c6c6" }]
				}, {
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [{ "color": "#e4d7c6" }]
				}, {
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [{ "color": "#fbfaf7" }]
				}, {
					"featureType": "water",
					"elementType": "all",
					"stylers": [{ "visibility": "on" }, { "color": "#acbcc9" }]
				}]
			}).marker(function(map) {
				return {
					position: map.getCenter(),
					icon: 'images/marker.png',
					animation: google.maps.Animation.BOUNCE
				};
			}).infowindow({
				content: map.data('address')
			}).then(function(infowindow) {
				var map = this.get(0);
				var marker = this.get(1);
				marker.addListener('click', function() {
					infowindow.open(map, marker);
				});
			});
		}
		else {
			console.log("Notice: Don't have map on this page!!!");
		}
	}

	function productVariantsAjax() {
		var selector = $('.ps-btn'),
			shoe = $('.ps-shoe');
		shoe.on('mouseenter', function() {
			var variants = $(this).find('.ps-shoe__variant');
			if (variants.children().length === 0) {
				setTimeout(function() {
					$.ajax({
						url: "../js/shoe-variants.js",
						success: function(data) {
							var images = JSON.parse(data);
							for (var i in images) {
								$('<img src=' + images[i] + '>').appendTo(variants);
							}
							variants.owlCarousel({
								margin: 20,
								autoplay: false,
								loop: false,
								nav: true,
								dots: false,
								mouseDrag: true,
								touchDrag: true,
								navSpeed: 1000,
								items: 4,
								navText: ["<i class='ps-icon-back'></i>", "<i class='ps-icon-next'></i>"],
								responsive: {
									0: {
										items: 3
									},
									480: {
										items: 3
									},
									768: {
										items: 3
									},
									992: {
										items: 4
									},
									1200: {
										items: 4
									}
								}
							});
						}
					});
				}, 0);

			}
			else {
				return false;
			}
		});
	}

	function productThumbnailChange() {
		var originImageData;
		$('.ps-shoe__variants').on('mouseenter', 'img', function() {
			var image = $(this).attr('src');
			var originImage = $(this).closest('.ps-shoe').find('.ps-shoe__thumbnail img');
			originImageData = originImage.attr('src');
			originImage.attr('src', image);
		});
	}

	function productVaritantsNormal() {
		var variants = $('.ps-shoe__variant.normal');
		variants.owlCarousel({
			margin: 20,
			autoplay: false,
			loop: false,
			nav: true,
			dots: false,
			mouseDrag: true,
			touchDrag: true,
			navSpeed: 1000,
			items: 4,
			navText: ["<i class='ps-icon-back'></i>", "<i class='ps-icon-next'></i>"],
			responsive: {
				0: {
					items: 3
				},
				480: {
					items: 3
				},
				768: {
					items: 3
				},
				992: {
					items: 4
				},
				1200: {
					items: 4
				}
			}
		});
	}

	function zoomAction() {
		$('.zoom').each(function() {
			if ($(this).parent().hasClass('slick-active')) {
				$(this).elevateZoom({
					responsive: true,
					zoomType: "inner",
					zoomWindowWidth: 600,
					zoomWindowHeight: 600
				});
			}
		});
	}

	function zoomInit() {
		var zoom = $('.ps-product__image .item').first().find('.zoom');
		var primary = $('.ps-product__image .item.slick-active').first().children('.zoom');
		primary.elevateZoom({
			responsive: true,
			zoomType: "inner",
			zoomWindowWidth: 600,
			zoomWindowHeight: 600
		});
	}

	function slickConfig() {
		var primary = $('.ps-product__image'),
			second = $('.ps-product__variants');
		primary.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.ps-product__variants',
			dots: false,
			arrows: false,

		});
		second.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			arrow: false,
			focusOnSelect: true,
			asNavFor: '.ps-product__image',
			vertical: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						arrows: false,
						slidesToShow: 4,
						vertical: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3,
						vertical: false
					}
				},
			]
		});
		primary.on('afterChange', function(event, slick, currentSlide) {
			zoomAction();
		});
		primary.on('beforeChange', function(event, slick, currentSlide) {
			$('.zoomContainer').remove();
		});
	}

	function bootstrapSelect() {
		$('.selectpicker').selectpicker({
			style: 'btn-primary',
			size: 4
		});
	}

	function magnificPopup() {
		$('.popup-youtube').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	}

	function filterSlider() {
		var el = $('.ac-slider');
		var min = el.siblings().find('.ac-slider__min');
		var max = el.siblings().find('.ac-slider__max');
		var defaultMinValue = el.data('default-min');
		var defaultMaxValue = el.data('default-max');
		var maxValue = el.data('max');
		var step = el.data('step');

		if (el.length > 0) {
			el.slider({
				min: 0,
				max: maxValue,
				step: step,
				range: true,
				values: [defaultMinValue, defaultMaxValue],
				slide: function(event, ui) {
					var $this = $(this),
						values = ui.values;

					min.text('$' + values[0]);
					max.text('$' + values[1]);
				}
			});

			var values = el.slider("option", "values");
			min.text('$' + values[0]);
			max.text('$' + values[1]);
		}
		else {
			return false;
		}
	}

	function revolution() {
		if ($("#home-banner").revolution == undefined) {
			revslider_showDoubleJqueryError("#rev_slider_1059_1");
		}
		else {
			$("#home-banner").show().revolution({
				sliderType: "standard",
				jsFileLocation: "../plugins/revolution/js/",
				dottedOverlay: "none",
				delay: 5000,
				navigation: {
					keyboardNavigation: "on",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					mouseScrollReverse: "default",
					onHoverStop: "on",
					bullets: {
						enable: true,
						style: 'hermes',
						tmp: '',
						direction: 'horizontal',
						rtl: false,
						container: 'slider',
						h_align: 'center',
						v_align: 'bottom',
						h_offset: 0,
						v_offset: 20,
						space: 5,

						hide_onleave: false,
						hide_onmobile: false,
						hide_under: 0,
						hide_over: 9999,
						hide_delay: 200,
						hide_delay_mobile: 1200
					},
					touch: {
						touchenabled: "on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					},
				},
				responsiveLevels: [1440, 1170, 992, 768],
				visibilityLevels: [1440, 1170, 992, 768],
				gridWidth: [1440, 1170, 992, 768],
				gridheight: [750, 700, 650, 600],
				lazyType: "none",
				parallax: {
					type: "scroll",
					origo: "slidercenter",
					speed: 1000,
					levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
					type: "scroll",
				},
				shadow: 0,
				spinner: "off",
				stopLoop: "off",
				shuffle: "off",
				autoHeight: "off",
				fullScreenAutoWidth: "off",
				fullScreenAlignForce: "off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "60px",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	}

	function stickyWidget() {
		// on scroll move the sidebar
		var widget = $('.ps-sticky.desktop');

		if (widget.length > 0 && $('.ps-sidebar').length > 0) {
			var sidebarEnd = $('.ps-sidebar').offset().top + $('.ps-sidebar').height();
			var stickyHeight = widget.height(),
				sidebarTop = widget.offset().top;
		}
		$(window).scroll(function() {
			if (widget.length > 0) {
				var scrollTop = $(window).scrollTop();
				if (sidebarTop < scrollTop) {
					widget.css('top', scrollTop - sidebarTop + 100);
					if (scrollTop >= sidebarEnd) {
						widget.css('top', sidebarEnd - sidebarTop - 120);
					}
				}

				else {
					widget.css('top', '0');
				}
			}
		});
	}

	$(document).ready(function() {
		backgroundImage();
		parallax();
		rating();
		menuBtnToggle();
		subMenuToggle();
		owlCarousel($('.owl-slider'));
		mapConfig();
		// setHeightProduct();
		navigateOwlCarousel();
		countDown();
		masonry();
		stickyHeader();
		productVariantsAjax();
		productThumbnailChange();
		bootstrapSelect();
		slickConfig();
		zoomInit();
		magnificPopup();
		productVaritantsNormal();
		// stickyWidget();
		revolution();
		filterSlider();
	});

	$(window).on('load', function() {
		$('.ps-loading').addClass('loaded');
	});

	$(window).on('load resize', function() {
		resizeHeader()
	});


	///////////////////////////////////////////////////////////////

	const productsContainer = document.querySelector("#grid-item");
	const cartContainer = document.querySelector("#shopping-cart");
	const cartContent = document.querySelector("#cart-content");
	const bodyDetailContent = document.querySelector("#row");
	const toggleCartBtn = document.querySelector("#toggle-cart-btn");
	const clearCartBtn = document.querySelector("#clear-cart");
	const checkoutBtn = document.querySelector("#checkout-btn");
	const totalPriceContainer = document.querySelector("#total-price");

	// FUNCTIONS

	function toggleCart() {
		// toggle shopping cart visibility
		cartContainer.classList.toggle("open");
	}

	function getLSContent() {
		// get contents from local storage.
		// if nothing is there, create an empty array
		const lsContent = JSON.parse(localStorage.getItem("products")) || [];
		return lsContent;
	}

	function setLSContent(lsContent) {
		// save content inside local storage
		localStorage.setItem("products", JSON.stringify(lsContent));
	}

	function calculateTotal(prices) {
		// calculate the total price in the cart
		return prices.reduce(function(prev, next) {
			return prev + next;
		}, 0);
	}

	function getCartItemPrices() {
		// extract the price numbers from the cart items to calculate total
		const prices = [];
		// retrieve the td element in the cart where the product price is stored
		// for each product in the cart
		let nums = cartContent.querySelectorAll("tr td:nth-child(3)");

		// iterate over each td node and extract the price
		// strip the $ sign from the text, turn the string into
		// a number and push the number into the prices array
		if (nums.length > 0) {
			for (let cell = 0; cell < nums.length; cell++) {
				let num = nums[cell].innerText;
				num = num.replace(/[^\d]/g, "");
				num = parseFloat(num);
				prices.push(num);
			}
			// return the prices array
			return prices;
		} else {
			return;
		}
	}

	function displayCartTotal() {
		// display the total cost in the cart
		const prices = getCartItemPrices();
		let total = 0;
		if (prices) {
			total = calculateTotal(prices);
			totalPriceContainer.innerHTML = `<span class="total">Total: $${total.toFixed(
				2
			)}</span>`;
		} else {
			totalPriceContainer.innerHTML = '<span class="total">Total: $0</span>';
		}
	}

	function displayProducts() {
		// display all products in the cart

		// get contents from local storage
		const lsContent = getLSContent();
		let productMarkup = "";
		// if local storage is not empty, build the
		// cart items markup and the appropriate details
		if (lsContent !== null) {
			for (let product of lsContent) {
				productMarkup += `
          <tr>
          <td><img class="cart-image" src="${product.image}" alt="${product.name
					}" width="120"></td>
          <td class="product-name-text">
            <p>Name: </p>${product.name} 
          </td>
          <td class="product-price"><p>Price:</p>${product.price}</td>
          <td><a href="#" data-id="${product.id}" class="remove">X</a></td>
          </tr>
        `;
			}
		} else {
			// if no content is in local storage, alert user
			productMarkup = "Your cart is empty.";
		}
		// add markup to DOM
		cartContent.querySelector("tbody").innerHTML = productMarkup;
	}

	function displayDetailsProducts() {
		// display all products in the cart

		// get contents from local storage
		const lsContent = getLSContent();
		let productMarkup_01 = "";
		// if local storage is not empty, build the
		// cart items markup and the appropriate details
		for (let product of lsContent) {
			productMarkup_01 += `            
                    <div class="col-lg-10 col-md-12 col-lg-offset-1">
                      <div class="ps-product__thumbnail">
                        <div class="ps-product__preview">
                          <div class="ps-product__variants">
                            <div class="item"><img src="${product.image}" alt="${product.name}"></div>
                            <div class="item"><img src="${product.image}" alt="${product.name}"></div>
                            <div class="item"><img src="${product.image}" alt="${product.name}"></div>
                            <div class="item"><img src="${product.image}" alt="${product.name}"></div>
                            <div class="item"><img src="${product.image}" alt="${product.name}"></div>
                          </div><a class="popup-youtube ps-product__video" href="http://www.youtube.com/watch?v=0O2aH4XLbto"><img
                          src="${product.image}" alt=""><i class="fa fa-play"></i></a>
                        </div>
                        <div class="ps-product__image">
                          <div class="item"><img class="zoom" src="${product.image}" alt="${product.name}"
                              data-zoom-image="${product.image}"></div>
                        </div>
                      </div>
                      <div class="ps-product__thumbnail--mobile">
                        <div class="ps-product__main-img"><img src="${product.image}" alt=""></div>
                        <div class="ps-product__preview owl-slider" data-owl-auto="true" data-owl-loop="true"
                          data-owl-speed="5000" data-owl-gap="20" data-owl-nav="true" data-owl-dots="false" data-owl-item="3"
                          data-owl-item-xs="3" data-owl-item-sm="3" data-owl-item-md="3" data-owl-item-lg="3"
                          data-owl-duration="1000" data-owl-mousedrag="on"><img src="${product.image}" alt=""><img
                            src="${product.image}" alt=""><img src="${product.image}" alt=""></div>
                      </div>
                      <div class="ps-product__info">
                        <div class="ps-product__rating">
                          <select class="ps-rating">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                          </select><a href="#">(Read all 8 reviews)</a>
                        </div>
                        <h1>${product.name}</h1>
                        <p class="ps-product__category"><a href="#"> Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a>
                        </p>
                        <h3 class="ps-product__price">${product.price}<del>£ 330</del></h3>
                        <div class="ps-product__block ps-product__quickview">
                          <h4>QUICK REVIEW</h4>
                          <p>The Nike Free RN 2017 Men's Running Sky weighs less than previous versions and features an updated
                            knit material…</p>
                        </div>
                        <div class="ps-product__block ps-product__style">
                          <h4>CHOOSE YOUR STYLE</h4>
                          <ul>
                            <li><a href="product-detail.html"><img src="${product.image}" alt=""></a></li>
                            <li><a href="product-detail.html"><img src="${product.image}" alt=""></a></li>
                            <li><a href="product-detail.html"><img src="${product.image}" alt=""></a></li>
                            <li><a href="product-detail.html"><img src="${product.image}" alt=""></a></li>
                          </ul>
                        </div>
                        <div class="ps-product__block ps-product__size">
                          <h4>CHOOSE SIZE<a href="#">Size chart</a></h4>
                          <select class="ps-select selectpicker">
                            <option value="1">Select Size</option>
                            <option value="2">4</option>
                            <option value="3">4.5</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                            <option value="3">6.5</option>
                            <option value="3">7</option>
                            <option value="3">7.5</option>
                            <option value="3">8</option>
                            <option value="3">8.5</option>
                            <option value="3">9</option>
                            <option value="3">9.5</option>
                            <option value="3">10</option>
                          </select>
                          <div class="form-group">
                            <input class="form-control" type="number" value="1">
                          </div>
                        </div>
                        <div class="ps-product__shopping"><a class="ps-btn mb-10" href="cart.html">Add to cart<i
                              class="ps-icon-next"></i></a>
                          <div class="ps-product__actions"><a class="mr-10" href="whishlist.html"><i
                                class="ps-icon-heart"></i></a><a href="compare.html"><i class="ps-icon-share"></i></a></div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                      <div class="ps-product__content mt-50">
                        <ul class="tab-list" role="tablist">
                          <li class="active"><a href="#tab_01" aria-controls="tab_01" role="tab" data-toggle="tab">Overview</a>
                          </li>
                          <li><a href="#tab_02" aria-controls="tab_02" role="tab" data-toggle="tab">Review</a></li>
                          <li><a href="#tab_03" aria-controls="tab_03" role="tab" data-toggle="tab">PRODUCT TAG</a></li>
                          <li><a href="#tab_04" aria-controls="tab_04" role="tab" data-toggle="tab">ADDITIONAL</a></li>
                        </ul>
                      </div>
                      <div class="tab-content mb-60">
                        <div class="tab-pane active" role="tabpanel" id="tab_01">
                          <p>Caramels tootsie roll carrot cake sugar plum. Sweet roll jelly bear claw liquorice.
                            Gingerbread lollipop dragée cake. Pie topping jelly-o. Fruitcake dragée candy canes tootsie
                            oll. Pastry jelly-o cupcake. Bonbon brownie soufflé muffin.</p>
                          <p>Sweet roll soufflé oat cake apple pie croissant. Pie gummi bears jujubes cake lemon drops
                            gummi bears croissant macaroon pie. Fruitcake tootsie roll chocolate cake Carrot cake cake
                            bear claw jujubes topping cake apple pie. Jujubes gummi bears soufflé candy canes topping
                            gummi bears cake soufflé cake. Cotton candy soufflé sugar plum pastry sweet roll..</p>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="tab_02">
                          <p class="mb-20">1 review for <strong>Shoes Air Jordan</strong></p>
                          <div class="ps-review">
                            <div class="ps-review__thumbnail"><img src="${product.image}" alt=""></div>
                            <div class="ps-review__content">
                              <header>
                                <select class="ps-rating">
                                  <option value="1">1</option>
                                  <option value="1">2</option>
                                  <option value="1">3</option>
                                  <option value="1">4</option>
                                  <option value="5">5</option>
                                </select>
                                <p>By<a href=""> Alena Studio</a> - November 25, 2017</p>
                              </header>
                              <p>Soufflé danish gummi bears tart. Pie wafer icing. Gummies jelly beans powder. Chocolate
                                bar pudding macaroon candy canes chocolate apple pie chocolate cake. Sweet caramels sesame
                                snaps halvah bear claw wafer. Sweet roll soufflé muffin topping muffin brownie. Tart bear
                                claw cake tiramisu chocolate bar gummies dragée lemon drops brownie.</p>
                            </div>
                          </div>
                          <form class="ps-product__review" action="_action" method="post">
                            <h4>ADD YOUR REVIEW</h4>
                            <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div class="form-group">
                                  <label>Name:<span>*</span></label>
                                  <input class="form-control" type="text" placeholder="">
                                </div>
                                <div class="form-group">
                                  <label>Email:<span>*</span></label>
                                  <input class="form-control" type="email" placeholder="">
                                </div>
                                <div class="form-group">
                                  <label>Your rating<span></span></label>
                                  <select class="ps-rating">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">4</option>
                                    <option value="5">5</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 ">
                                <div class="form-group">
                                  <label>Your Review:</label>
                                  <textarea class="form-control" rows="6"></textarea>
                                </div>
                                <div class="form-group">
                                  <button class="ps-btn ps-btn--sm">Submit<i class="ps-icon-next"></i></button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="tab_03">
                          <p>Add your tag <span> *</span></p>
                          <form class="ps-product__tags" action="_action" method="post">
                            <div class="form-group">
                              <input class="form-control" type="text" placeholder="">
                              <button class="ps-btn ps-btn--sm">Add Tags</button>
                            </div>
                          </form>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="tab_04">
                          <div class="form-group">
                            <textarea class="form-control" rows="6" placeholder="Enter your addition here..."></textarea>
                          </div>
                          <div class="form-group">
                            <button class="ps-btn" type="button">Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
               
        `;
		}
		// add markup to DOM
		bodyDetailContent.querySelector("tbody_01").innerHTML = productMarkup_01;
	}

	function saveProduct(clickedBtn) {
		// save selected product in local storage and display it in the cart together

		// vars
		const productId = clickedBtn.getAttribute("data-id");
		const card = clickedBtn.parentElement.parentElement;
		const cardInfo = clickedBtn.parentElement;
		const prodImage = card.querySelector("img").src;
		const prodName = cardInfo.querySelector(".ps-shoe__name").textContent;
		const prodPrice = cardInfo.querySelector(".ps-shoe__price").textContent;

		let isProductInCart = false;

		// get local storage array
		const lsContent = getLSContent();

		// to avoid user adds the same course twice, check
		// the product is not in LS already before adding it
		lsContent.forEach(function(product) {
			if (product.id === productId) {
				alert("This course is already in your cart.");
				isProductInCart = true;
			}
		});

		// only if the product is not already in the cart,
		// create an object representing selected product info
		// and push it into local storage array
		if (!isProductInCart) {
			lsContent.push({
				id: productId,
				image: prodImage,
				name: prodName,
				price: prodPrice
			});

			// add product into into local storage
			setLSContent(lsContent);
			// update the display of courses in the shopping cart
			displayProducts();

			displayDetailsProducts();
		}
	}

	function removeProduct(productId) {
		// remove product from cart (and from local storage)

		// retrieve list of products from LS
		const lsContent = getLSContent();

		// get the index of the product item to remove
		// inside the local storage content array
		let productIndex;
		lsContent.forEach(function(product, i) {
			if (product.id === productId) {
				productIndex = i;
			}
		});

		// modify the items in local storage array
		// to remove the selected product item

		lsContent.splice(productIndex, 1);
		// update local storage content
		setLSContent(lsContent);

		displayProducts();
	}

	function clearCart() {
		// clear all products from cart (and local storage)

		// retrieve list of products from LS
		const lsContent = getLSContent();
		// empty array in local storage
		lsContent.splice(0, lsContent.length);
		// update local storage
		setLSContent(lsContent);
		// display cart content again
		displayProducts();
	}

	function checkout() {
		// checkout: just clear the cart
		// after user confirms the checkout process
		const cartProducts = cartContent.querySelector("tbody").innerHTML;
		if (cartProducts !== "" && confirm("Are you sure you want to checkout?")) {
			clearCart();
		} else {
			return;
		}
	}

	// BIND EVENTS AND CALL FUNCTIONS

	// Page load:
	document.addEventListener("DOMContentLoaded", function(e) {
		// display list of products in cart, if any, on page load
		displayProducts();
		// display cart total
		displayCartTotal();

		displayDetailsProducts();
	});

	// open and close shopping cart
	// when cart button is clicked

	// toggleCartBtn.addEventListener("click", function (e) {
	//     e.preventDefault();
	//     toggleCart();
	// });

	// Save product in cart and Local Storage
	// when add to cart button is clicked
	productsContainer.addEventListener("click", function(e) {
		if (e.target.classList.contains("add-to-cart")) {
			e.preventDefault();
			const clickedBtn = e.target;
			saveProduct(clickedBtn);
		} else {
			window.location.href = '../../views/product-detail.jsp';
			e.preventDefault();
			const clickedBtn = e.target;
			saveProduct(clickedBtn);
		}
	});

	productsContainer.addEventListener("click", function(e) {
		if (e.target.classList.contains("add-to-cart")) {
			displayCartTotal();
		}
	});

	// bind removeProduct to click event of the cartContent table
	cartContent.querySelector("tbody").addEventListener("click", function(e) {
		e.preventDefault();
		// identify the button that was clicked
		const clickedBtn = e.target;
		// if it's a remove button
		if (e.target.classList.contains("remove")) {
			// get the value of the data-id property, which contains the
			// id of the selected product
			const productId = clickedBtn.getAttribute("data-id");
			// use the id to remove the selected product
			removeProduct(productId);
			// display products in the cart again,
			// now the list should be displayed with 1 less product
			// or empty if no products are left in the cart

			// adjust the total
			displayCartTotal();
		}
	});

	// bind the button to clear the cart both to the function that
	// clears the cart and to the function that adjusts the total price
	// clearCartBtn.addEventListener("click", function (e) {
	//     e.preventDefault();
	//     clearCart();
	// });
	// clearCartBtn.addEventListener("click", displayCartTotal);

	// bind the button that does the checkout both to the function that
	// controls the checkout and and to the function that adjusts the total price

	// checkoutBtn.addEventListener("click", function (e) {
	//     e.preventDefault();
	//     checkout();
	// });
	// checkoutBtn.addEventListener("click", displayCartTotal);



})(jQuery);

//# sourceMappingURL=main.js.map






