/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */

/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});

/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

// passwords show hid
const togglePasswordVisibility = (id, inputId) => {
    const passwordInput = document.getElementById(inputId);
    const togglePasswordVisibility = document.getElementById(id);
    passwordInput.type === "password"
        ? (passwordInput.type = "text", togglePasswordVisibility.innerHTML = '<span class="pass-show-hide-icon text_dark_2 fs-6 ni ni-eye position-absolute"></span>')
        : (passwordInput.type = "password", togglePasswordVisibility.innerHTML = '<span class="pass-show-hide-icon text_dark_2 fs-6 pass-show ni ni-eye-off position-absolute"></span>');
};





$(document).ready(function () {

    // domain-result
    $(".search-btn").click(function () {
        $(".domain-result").slideToggle();
        // $(".search-domain").toggleClass('section-padding');
    });
    // domain-result - end


    // custom-select-wrapper
    (function ($) {
        $(".custom-select-menu").on("click", ".init", function () {
            $(this).closest(".custom-select-menu").children('li:not(.init)').toggle();
        });

        var allOptions = $(".custom-select-menu").children('li:not(.init)');
        $(".custom-select-menu").on("click", "li:not(.init)", function () {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(".custom-select-menu").children('.init').html($(this).html());
            allOptions.toggle();
        });
    })(jQuery);
    // custom-select-wrapper -End


    // services-wrapper
    $(function () {
        if ($(window).width() < 975) {
            $('.plan-packages').addClass('plan-slider owl-carousel owl-theme');
            if ($('.plan-slider').length) {
                $(".plan-slider").owlCarousel({
                    items: 1,
                    margin: 20,
                    nav: true,
                    loop: true,
                    autoplay: false,
                    autoplayTimeout: 1000,
                    smartSpeed: 1000,
                    navText: true,
                    startPosition: 4,
                    navText: ["<span class='ni ni-back-ios'></span>", "<span class='ni ni-forward-ios'></span>"],
                    dots: true,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        575: {
                            items: 1,
                            stagePadding: 100,
                        },
                    }
                });
            }
        }
    })
    // services-wrapper -End

    // news-carousel
    $(function () {
        if ($(window).width() < 975) {
            $('.news-slide-row').addClass('news-slider owl-carousel owl-theme');
            if ($('.news-slider').length) {
                $(".news-slider").owlCarousel({
                    items: 1,
                    margin: 20,
                    nav: true,
                    loop: true,
                    autoplay: false,
                    autoplayTimeout: 1000,
                    smartSpeed: 1000,
                    navText: true,
                    navText: ["<span class='ni ni-back-ios'></span>", "<span class='ni ni-forward-ios'></span>"],
                    dots: true,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        767: {
                            items: 2
                        },
                    }
                });
            }
        }
    })
    // news-carousel

    // minimal-price-card
    $(function () {
        if ($(window).width() < 975) {
            $('.minimal-price-card').addClass('owl-carousel owl-theme');
            if ($('.owl-carousel').length) {
                $(".owl-carousel").owlCarousel({
                    items: 1,
                    margin: 20,
                    nav: true,
                    loop: true,
                    autoplay: false,
                    autoplayTimeout: 1000,
                    smartSpeed: 1000,
                    navText: true,
                    startPosition: 7,
                    navText: ["<span class='ni ni-back-ios'></span>", "<span class='ni ni-forward-ios'></span>"],
                    dots: true,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        767: {
                            items: 2
                        },
                    }
                });
            }
        }
    })
    // minimal-price-card

    // vps-pricing-slider
    $(function () {
        if ($(window).width() < 975) {
            $('.vps-pricing-slider').addClass('pricing-slider owl-carousel owl-theme');
            if ($('.pricing-slider').length) {
                $(".pricing-slider").owlCarousel({
                    items: 2,
                    margin: 20,
                    nav: true,
                    loop: false,
                    autoplay: false,
                    autoplayTimeout: 1000,
                    smartSpeed: 1000,
                    navText: true,
                    navText: ["<span class='ni ni-back-ios'></span>", "<span class='ni ni-forward-ios'></span>"],
                    startPosition: 9,
                    dots: true,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        575: {
                            items: 2,
                        },
                    }
                });
            }
        }
    })
    // vps-pricing-slider

    // bs-pricing-slider
    $(function () {
        if ($(window).width() < 975) {
            $('.bs-pricing-slider').addClass('bs-slider owl-carousel owl-theme');
            if ($('.bs-slider').length) {
                $(".bs-slider").owlCarousel({
                    items: 1,
                    margin: 20,
                    nav: true,
                    loop: true,
                    autoplay: false,
                    autoplayTimeout: 1000,
                    smartSpeed: 1000,
                    navText: true,
                    navText: ["<span class='ni ni-back-ios'></span>", "<span class='ni ni-forward-ios'></span>"],
                    startPosition: 7,
                    dots: true,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        575: {
                            items: 2,
                        },
                    }
                });
            }
        }
    })
    // bs-pricing-slider

    // vps-benefits-slider
    $(function () {
        if ($(window).width() < 975) {
            $('#benefits-wrapper').addClass('benefits-slider owl-carousel owl-theme');
            if ($('.benefits-slider').length) {
                $(".benefits-slider").owlCarousel({
                    items: 1,
                    margin: 20,
                    nav: true,
                    loop: true,
                    autoplay: false,
                    autoplayTimeout: 1000,
                    smartSpeed: 1000,
                    navText: true,
                    navText: ["<span class='ni ni-back-ios'></span>", "<span class='ni ni-forward-ios'></span>"],
                    startPosition: 9,
                    dots: true,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        575: {
                            items: 2,
                        },
                    }
                });
            }
        }
    })
    // vps-benefits-slider

    // Our Story page sliders...

    // Testimonial slider
    $(function () {
        if ($('.testimonial-wrapper').length) {
            $(".testimonial-wrapper").owlCarousel({
                items: 4,
                margin: 30,
                nav: false,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1000,
                smartSpeed: 1000,
                navText: false,
                // startPosition: 1,
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1,
                    },
                    992: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    }
                }
            });
        }
    })
    // Testimonial slider

    // Services -slider
    $(function () {
        if ($(window).width() < 1200) {
            $('.our-services-carousel').addClass('owl-carousel owl-theme');
            if ($('.owl-carousel').length) {
                $(".owl-carousel").owlCarousel({
                    items: 1,
                    margin: 30,
                    nav: true,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 1000,
                    smartSpeed: 1000,
                    navText: ["<span class='ni ni-back-ios'></span>", "<span class='ni ni-forward-ios'></span>"],
                    startPosition: 1,
                    dots: true,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2,
                        },
                        992: {
                            items: 3,
                        },
                        1200: {
                            items: 3,
                        },
                    }
                });
            }
        }
    })
    // Services -slider


    // Team slider
    $(function () {
        if ($(".our-team-member").length) {
            $(".our-team-member").owlCarousel({
                items: 4,
                margin: 30,
                nav: false,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1000,
                smartSpeed: 1000,
                navText: false,
                startPosition: 1,
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    }
                }
            });
        }
    })
    // Team slider

    // custom accordion
    $(function () {
        if ($('.accordion-list').length) {
            $('.accordion-list').on('click', '.accordion-title', function (e) {
                e.preventDefault();
                // remove siblings activities
                $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
                $(this).closest('.accordion-list-item').siblings().find('.ni').addClass('ni-downward-ios').removeClass('ni-upword-ios');

                // add slideToggle into this
                $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
                $(this).find('.ni').toggleClass('ni-downward-ios ni-upword-ios');
            });
        }
    });

    // FormGroupCollapsed-item
    $(function () {
        if ($('.header-wrap').length && $('.collapsed-item').length) {
            $('.header-wrap').on('click', function (e) {
                e.preventDefault();
                if ($(this).closest('.collapsed-group').find('.collapsed-item').toggle()) {
                    $(this).find('.ni').toggleClass('ni-chevron-down ni-chevron-up');
                }
            });
        }
    });

    // testimonial-active
    $(function () {
        if ($('.testimonials-active').length) {
            $(".testimonials-active").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1000,
                smartSpeed: 1000,
                animateOut: 'fadeOut',
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });

    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });

});
