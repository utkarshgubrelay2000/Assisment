(function ($) {
    "use strict";

    /*--
        Commons Variables
    -----------------------------------*/
    var $window = $(window),
        $body = $('body');

    /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
    $('[data-bg-image]').each(function () {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });
    $('[data-bg-color]').each(function () {
        var $this = $(this),
            $color = $this.data('bg-color');
        $this.css('background-color', $color);
    });

    /*------------------------------
        Parallax Motion Animation 
    -------------------------------*/
    $('.scene').each(function () {
        new Parallax($(this)[0]);
    });

    /*--
        Header Sticky
    -----------------------------------*/
    $window.on('scroll', function () {
        if ($window.scrollTop() > 350) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    });

    /*--
        Off Canvas Function
    -----------------------------------*/
  
    $('.site-mobile-menu').on('click', '.menu-toggle', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.siblings('.sub-menu:visible, .mega-menu:visible').length) {
            $this.siblings('.sub-menu, .mega-menu').slideUp().parent().removeClass('open').find('.sub-menu, .mega-menu').slideUp().parent().removeClass('open');
        } else {
            $this.siblings('.sub-menu, .mega-menu').slideDown().parent().addClass('open').siblings().find('.sub-menu, .mega-menu').slideUp().parent().removeClass('open');
        }
    });


    $('.header-search-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.header-search-form, .header-search-form-2').slideToggle().parent().toggleClass('open');
    });

    $('.header-fs-search-toggle').on('click', function () {
        $('#fullscreen-search').addClass('open');
    });
    $('.fullscreen-search-close').on('click', '.toggle', function () {
        $('#fullscreen-search').removeClass('open');
    });

    $body.on('click', function (e) {
        if (!$(e.target).closest('.header-search').length && $window.width() < 768) {
            $('.header-search-form, .header-search-form-2').slideUp().parent().removeClass('open');
        }
        if (!$(e.target).closest('.site-main-mobile-menu-inner').length && !$(e.target).closest('.header-mobile-menu-toggle').length) {
            $body.removeClass('mobile-menu-open');
        }
    });


    $('.max-popup-close').on('click', function () {
        var $this = $(this),
            $popup = $this.closest('#max-popup'),
            $dialog = $this.parent('.max-popup-dialog');
        $popup.addClass('close');
        $dialog.removeClass('fadeInUp').addClass('fadeOutUp');
    });


    /* -----------------------------------
        Selectric Fake Select Plugin 
    -------------------------------------*/
    $('.selectric').selectric({
        arrowButtonMarkup: '<span class="arrow"><i class="far fa-angle-down"></i></span>',
        disableOnMobile: false,
    });
    $('.sort-by').selectric({
        arrowButtonMarkup: '<span class="arrow"><i class="far fa-angle-down"></i></span>',
        labelBuilder: '<i class="far fa-align-left"></i> Sort By: <span>{text}</span>',
        disableOnMobile: false,
    });

    /* ----------------------------
        AOS Scroll Animation 
    -------------------------------*/
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });


    /*----------------------------------------
         SVG Inject With Vivus(After Inject) 
    ------------------------------------------*/
    SVGInject(document.querySelectorAll("img.svgInject"), {
        makeIdsUnique: true,
        afterInject: function (img, svg) {
            new Vivus(svg, {
                duration: 80
            });
        }
    });
    /* Vivus On Hover */
    $('[data-vivus-hover]').hover(function () {
        var svg = $(this).find('svg')[0];
        new Vivus(svg, {
            duration: 50
        });
    })

    /*----------------------------
        Justified Gallery 
    ------------------------------*/
    var $justifiedGallery = $('.justified-gallery');

    $justifiedGallery.imagesLoaded(function () {
        $justifiedGallery.justifiedGallery({
            rowHeight: 440,
            maxRowHeight: null,
            margins: 10,
            border: 0,
            lastRow: 'nojustify'
        });
        
    });

    /*-----------------------
        CounterUp JS 
    -------------------------*/
    $('.counter').counterUp({
        time: 2000
    });

    /*--------------------------------
        Swiper Slider Activation JS 
    ----------------------------------*/
     // Home 7 Slider
     var intro7Slider = new Swiper('.intro7-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.home7-slider-pagination',
            clickable: true,
        }
        //autoplay: {},
    });

    // Home 8 Slider
    var intro8Slider = new Swiper('.intro8-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.home8-slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.home8-slider-next',
            prevEl: '.home8-slider-prev',
        },
        //autoplay: {},
    });

    // Home 11 Slider
    var intro11Slider = new Swiper('.intro11-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        effect: 'fade',
        navigation: {
            nextEl: '.home11-slider-next',
            prevEl: '.home11-slider-prev',
        },
        //autoplay: {},
    });

    // Banner Slider
    var bannerSlider = new Swiper('.banner-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        effect: 'fade',
        navigation: {
            nextEl: '.banner-slider-next',
            prevEl: '.banner-slider-prev',
        },
        //autoplay: {},
    });

    // Health Testimonial Slider
    var testimonialSlider = new Swiper('.health-testimonial-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
        //autoplay: {},
    });

    // Testimonial Slider
    var testimonialSlider = new Swiper('.testimonial-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 50,
        slidesPerView: 2,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            }
        }
    })

    // Testimonial Slider Two
    var testimonialSlider = new Swiper('.testimonial-slider-two', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween : 50,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },

            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

    // Testimonial Slider Three
    var testimonialSlider = new Swiper('.testimonial-slider-three', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        autoHeight: true,
        spaceBetween : 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-t0',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 1
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

    // Testimonial Slider Vertical
    var testimonialSlider = new Swiper('.testimonial-slider-vertical', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        effect: 'coverflow',
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            1499:{
                slidesPerView : 1
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

    // Home 5 Testimonial Slider
    var testimonialSlider = new Swiper('.h5-testimonial-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })


    // Home 8 Testimonial Slider
    var testimonialSlider = new Swiper('.testimonial-slider-8', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
    })

    // Testimonial Slider Three Item
    var testimonialSlider = new Swiper('.testimonial-slider-three-item', {
        watchSlidesVisibility: true,
        loop: true,
        autoHeight: true,
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
            nextEl: '.circle-slider-next',
            prevEl: '.circle-slider-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Motivation Testimonial Slider
    var testimonialSlider = new Swiper('.motivation-testimonial-slider', {
        watchSlidesVisibility: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // Brand Carousel Slider
    var brandSlider = new Swiper('.brand-carousel', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 6,
        breakpoints: {
            1200: {
                slidesPerView: 6
            },
            992: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 5
            },
            576: {
                slidesPerView: 4
            },
            320: {
                slidesPerView: 2
            }
        }
    })

    // Courses Slider
    var courseSlider = new Swiper('.courses-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Speaker Slider
    var speakerSlider = new Swiper('.speaker-slider', {
        watchSlidesVisibility: true,
        loop: false,
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            1200: {
                slidesPerView: 5
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Event Slider
    var eventSlider = new Swiper('.event-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Event Slider Four Item
    var eventSlider = new Swiper('.event-slider-four-item', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 1,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Service Slider
    var serviceSlider = new Swiper('.service-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    })

    // Cooking About Slider
    var cookingSlider = new Swiper('.cooking-about-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
    })

    /*--
        Isotpe
    -----------------------------------*/
    var $isotopeGrid = $('.isotope-grid');
    var $isotopeFilter = $('.isotope-filter');
    $isotopeGrid.imagesLoaded(function () {
        $isotopeGrid.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        AOS.refresh();
    });
    $isotopeFilter.on('click', 'button', function () {
        var $this = $(this),
            $filterValue = $this.attr('data-filter'),
            $targetIsotop = $this.parent().data('target');
        $this.addClass('active').siblings().removeClass('active');
        $($targetIsotop).isotope({
            filter: $filterValue
        });
    });

    /*--
        ion Range Slider
    -----------------------------------*/
    $(".price-range").ionRangeSlider({
        skin: "maxCoach",
        hide_min_max: true,
        type: 'double',
        prefix: "$",
    });


    /*--
        Jarallax Active
    -----------------------------------*/
    $('.jarallax').jarallax({
        speed: 0.2
    });

    /*--
        Rellax Active
    -----------------------------------*/
    var rellax = new Rellax('.rellax');

    /*------------------------
        Sticky Sidebar Active
    -------------------------*/
    $('#sticky-sidebar').theiaStickySidebar({
        // Settings
        additionalMarginTop: 120
    });


    /*----------------------------------- 
        Count Down Active 
    ----------------------------------*/  
    $('[data-countdown]:not(.pro-countdown-1,.pro-countdown-2)').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="single-countdown-box"><span>%D</span>Day</div><div class="single-countdown-box"><span>%H</span>Hours</div><div class="single-countdown-box"><span>%M</span>Mins</div><div class="single-countdown-box"><span>%S</span>Secs</div>'));
        });
    });
    $('[data-countdown].pro-countdown-1').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="single-countdown-box-1"><span>%D</span>Day</div><div class="single-countdown-box-1"><span>%H</span>Hours</div><div class="single-countdown-box-1"><span>%M</span>Mins</div><div class="single-countdown-box-1"><span>%S</span>Secs</div>'));
        });
    });
    $('[data-countdown].pro-countdown-2').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="countdown-item before-none"><span>%D</span></div><div class="countdown-item"><span>%H</span></div><div class="countdown-item"><span>%M</span></div><div class="countdown-item"><span>%S</span></div>'));
        });
    });
    
    /*----- 
        Quantity
    --------------------------------*/
    $('.pro-qty').prepend('<button class="dec qtybtn">-</button>');
    $('.pro-qty').append('<button class="inc qtybtn">+</button>');
    $('.qtybtn').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
        } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
        }
        }
        $button.parent().find('input').val(newVal);
    });

    /*----- 
	Shipping Form Toggle
    --------------------------------*/ 
    $('[data-shipping]').on('click', function(){
        if( $('[data-shipping]:checked').length > 0 ) {
            $('#shipping-form').slideDown();
        } else {
            $('#shipping-form').slideUp();
        }
    })
        
    /*----- 
        Payment Method Select
    --------------------------------*/
    $('[name="payment-method"]').on('click', function(){
        
        var $value = $(this).attr('value');

        $('.single-method p').slideUp();
        $('[data-method="'+$value+'"]').slideDown();
        
    })

    /*----- 
        Animate Headline Active
    --------------------------------*/
    $('.headline-active').animatedHeadline({
        animationType: 'rotate-2'
    });

    /*--
        Magnific Popup
    -----------------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*--
        Scroll Up
    -----------------------------------*/
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();


    /*-------------------------
        Ajax Contact Form 
    ---------------------------*/
    $(function() {

        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('.form-messege');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: '/assets/php/contact-mail.php',
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });

    });

    /*--
        On Load Function
    -----------------------------------*/
    $window.on('load', function () {});

    /*--
        Resize Function
    -----------------------------------*/
    $window.resize(function () {});
    $(function () {
        $('#myList li a:last-child').tab('show')
      })
    $('.bkByTopic').click(function(){
        if($(this).prop("checked") == true){
            $(".class-list-item").delay(1000).show();
            $(".bk-class-monthly").delay(1000).hide();
            $(".bk-monthly-checknox").delay(1000).show();
            $('.bkMothlyClasses').prop('checked', false);
        }
        else if($(this).prop("checked") == false){
            $(".class-list-item").delay(1000).hide();
            $(".bk-class-monthly").delay(1000).show();
            $(".bk-monthly-checknox").delay(1000).hide();
        }
    });
    
    $('.bkMothlyClasses').click(function(){
        if($(this).prop("checked") == true){
            console.log("true");
            $(".class-list-item").hide();
            $(".bk-class-monthly").show();
            $(".bk-monthly-checknox").hide();
            $('.bkByTopic').prop('checked', false);
        }
        else if($(this).prop("checked") == false){
            
            console.log("false");
            $(".class-list-item").show();
            $(".bk-class-monthly").hide();
            $(".bk-monthly-checknox").show();
        }
    });
})(jQuery);


function getCourse(selectObject, courseName) {
    var optionValue = selectObject.value;
    var courseName = courseName;
    var priceObj = {
                    'arcourse':{'1':[8999,12856],
                          '2':[26999,38570],
                          '3':[80999,115713],
                          '4':[108999,155713]
                          },
                    'mpcourse':{'1':[8999,12856],
                          '2':[26999,38570],
                          '3':[80999,115713],
                          '4':[108999,155713]
                          },
                    'vrcourse':{'1':[8999,12856],
                          '2':[26999,38570],
                          '3':[80999,115713],
                          '4':[108999,155713]
                          },
                    'aicourse':{'1':[9999,14285],
                          '2':[29999,42856],
                          '3':[59999,85713],
                          '4':[89999,128570],
                          '5':[119999,171427]
                          },
                    'webcourse':{'1':[8999,12856],
                          '2':[26999,38570],
                          '3':[80999,115713],
                          '4':[108999,155713]
                          },
                    '3dcourse':{'1':[8999,12856],
                          '2':[26999,38570],
                          '3':[80999,115713],
                          '4':[108999,155713]
                          }
                    };
    var discountedPrice = priceObj[courseName][optionValue][0];
    var discountedPrice = discountedPrice.toLocaleString();
    var discountedPrice = '₹ '+discountedPrice;
    //console.log(discountedPrice);
    var totalPrice = priceObj[courseName][optionValue][1];
    var totalPrice = totalPrice.toLocaleString();
    var totalPrice = '₹'+totalPrice;
    //console.log(totalPrice);
    var parentdiv = '.'+courseName;
    //console.log(parentdiv+' '+'.discount-price');

    $(parentdiv+' '+'.discount-price').text(discountedPrice);
    $(parentdiv+' '+'.total-rate').text(totalPrice);
}