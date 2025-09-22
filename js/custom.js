(function ($) {
    "use strict";

    //preloader 

    window.addEventListener("DOMContentLoaded", () => {
        const preloader = document.querySelector(".preloader_area");
        preloader.style.transition = "opacity 0.5s ease";
        preloader.style.opacity = "0";        
       
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000);
    });

    $(document).ready(function () {
        var windowOn = $(window);
        
        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });


        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });


        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });


        //>> Sticky Menu <<//
        windowOn.on('scroll', function () {
            var scroll = windowOn.scrollTop();
            if (scroll < 300) {
                $("#header-sticky").removeClass("sticky_top");
            } else {
                $("#header-sticky").addClass("sticky_top");
            }
        });


        //>> offcanvas bar <<//
        $(".tp-offcanvas-toogle").on('click', function () {
            $(".tp-offcanvas").addClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });
        $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function () {
            $(".tp-offcanvas").removeClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });

    // ---------------------------------
        // Cleaning Slider
        var $cleaningSlider = $('.cleaning_container_area');
        $cleaningSlider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dotsClass: 'container_area docts-active',
            speed: 2000,
            easing: 'ease-in-out',
            responsive: [
                { breakpoint: 1190, settings: { slidesToShow: 3 } },
                { breakpoint: 924, settings: { slidesToShow: 2 } },
                { breakpoint: 600, settings: { slidesToShow: 1 } }
            ]
        });
        // Review Slider
        var $reviewSlider = $('.customers_reviews_wrapper');
        function initReviewSlider() {
            if ($reviewSlider.hasClass('slick-initialized')) {
                $reviewSlider.slick('unslick');
            }
            $reviewSlider.slick({
                slidesToShow: 3.55,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 0,
                speed: 3000,
                cssEase: "linear",
                infinite: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                responsive: [
                    { breakpoint: 1025, settings: { slidesToShow: 2 } },
                    { breakpoint: 768, settings: { slidesToShow: 1 } }
                ]
            });
        }
        initReviewSlider();
        $(window).on('resize', initReviewSlider);
        // Tab Active Class Toggle
        $(document).on("click", ".tab", function () {
            $(".tab").removeClass("active");
            $(this).addClass("active");
        });
        // Scroll-triggered Counter Animation
        $(".about_count").each(function () {
            let counter = $(this);
            let targetValue = counter.data("count").toString().replace(/\D/g, "");
            let suffix = counter.data("count").toString().replace(/\d/g, "");
            gsap.to(counter[0], {
                innerText: targetValue,
                snap: "innerText",
                ease: "power2.out",
                duration: 3,
                scrollTrigger: {
                    trigger: counter[0],
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onUpdate: function () {
                    counter.text(suffix + Math.round(counter.text()));
                },
                onStart: () => {
                    gsap.to(counter[0], { opacity: 1, scale: 1, duration: 0.5 });
                }
            });
        });
        // Hero Section Slider
        $('.hero_section_area').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            speed: 1000,
            cssEase: 'ease-in-out',
        });
        $('.slick-current .hero_contains .heading').addClass('animated');
        $('.slick-current .hero_contains .sub_heading').addClass('animated');
        $('.hero_section_area').on('afterChange', function (event, slick, currentSlide) {
            $('.hero_contains .heading, .hero_contains .sub_heading').removeClass('animated');
            $('.slick-current .hero_contains .heading, .slick-current .hero_contains .sub_heading').addClass('animated');
        });

        function showSection(sectionId) {
            $('.content-section').removeClass('active');
            $('#' + sectionId).addClass('active');      

            $('.nav-link').removeClass('active');
            $('[data-section="' + sectionId.replace('-section', '') + '"]').addClass('active');
        }

            $('.nav-link').on('click', function (e) {
                e.preventDefault();
                var targetSection = $(this).data('section') + '-section';
                showSection(targetSection);
            });
            showSection('dashboard-section');
        $('.nav-link').on('click', function (e) {
            e.preventDefault(); 
            var targetSection = $(this).data('section') + '-section'; 
            showSection(targetSection);
        });

        showSection('dashboard-section');
        function course(){
                const courseItems = document.querySelectorAll('.course-item');
                const options = {
                    root: null, 
                    rootMargin: '0px', 
                    threshold: 0.5 
                };

                const callback = (entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const progressBar = $(entry.target).find('.progress-bar');
                            const progressValue = progressBar.find('.progress-value');
                            const finalProgress = progressBar.data('progress');

                            progressBar.css('width', finalProgress + '%');

                            $({ countNum: 0 }).animate({
                                countNum: finalProgress
                            }, {
                                duration: 1500, 
                                easing: 'swing', 
                                step: function () {
                                    progressValue.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    progressValue.text(finalProgress);
                                }
                            });

                            observer.unobserve(entry.target);
                        }
                    });
                };

                const observer = new IntersectionObserver(callback, options);

                courseItems.forEach(item => {
                    observer.observe(item);
                });
            
        }
        course()
        function passwordChange(){
                $('.toggle-password').on('click', function () {
                    $(this).toggleClass('fa-eye fa-eye-slash');
                    var input = $(this).closest('.password-input-container').find('input');
                    if (input.attr('type') === 'password') {
                        input.attr('type', 'text');
                    } else {
                        input.attr('type', 'password');
                    }
                });

                $('#newPassword').on('keyup', function () {
                    var password = $(this).val();

                    var minLength = password.length >= 12;
                    var hasLowercase = /[a-z]/.test(password);
                    var hasUppercase = /[A-Z]/.test(password);
                    var hasNumber = /[0-9]/.test(password);
                    var hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

                    $('#min-length').toggleClass('met', minLength);
                    $('#lowercase').toggleClass('met', hasLowercase);
                    $('#uppercase').toggleClass('met', hasUppercase);
                    $('#number').toggleClass('met', hasNumber);
                    $('#special-char').toggleClass('met', hasSpecialChar);
                });

                $('#changePasswordForm').on('submit', function (e) {
                    e.preventDefault();

                    var oldPassword = $('#oldPassword').val();
                    var newPassword = $('#newPassword').val();
                    var confirmPassword = $('#confirmPassword').val();

                    if (newPassword !== confirmPassword) {
                        alert('New password and confirm password do not match!');
                        return;
                    }

                    var allCriteriaMet = $('#min-length').hasClass('met') &&
                        $('#lowercase').hasClass('met') &&
                        $('#uppercase').hasClass('met') &&
                        $('#number').hasClass('met') &&
                        $('#special-char').hasClass('met');

                    if (!allCriteriaMet) {
                        alert('Please meet all password criteria!');
                        return;
                    }
                    alert('Form submitted! Password change logic would be here.');

                    $(this)[0].reset();
                    $('.criteria-item').removeClass('met');
                });
            
        }
        passwordChange();
        function incDec() {
                const MAX_COUNT = 10;
                const MIN_COUNT = 1; 

                function updateButtonsState($countItem) {
                    let currentValue = parseInt($countItem.text());
                    let $incButton = $countItem.siblings('.inc');
                    let $decButton = $countItem.siblings('.dec');

                    if (currentValue >= MAX_COUNT) {
                        $incButton.addClass('disabled');
                    } else {
                        $incButton.removeClass('disabled');
                    }

                    if (currentValue <= MIN_COUNT) {
                        $decButton.addClass('disabled');
                    } else {
                        $decButton.removeClass('disabled');
                    }
                }

                $('.count_item').each(function () {
                    updateButtonsState($(this));
                });

                $('.inc').on('click', function () {
                    let $countItem = $(this).siblings('.count_item');
                    let currentValue = parseInt($countItem.text());

                    if (currentValue < MAX_COUNT) { 
                        $countItem.text(currentValue + 1);
                        updateButtonsState($countItem); 
                    }
                });

                $('.dec').on('click', function () {
                    let $countItem = $(this).siblings('.count_item');
                    let currentValue = parseInt($countItem.text());

                    if (currentValue > MIN_COUNT) { 
                        $countItem.text(currentValue - 1);
                        updateButtonsState($countItem); 
                    }
                });
            
        }
        incDec()

        function countProduct(){
            $('.inc_btn').on('click', function () {
                let inputField = $(this).siblings('input[type="text"]');
                let currentValue = parseInt(inputField.val());
                if (isNaN(currentValue) || currentValue < 0) {
                    currentValue = 0;
                }

                inputField.val(currentValue + 1);
            });

            $('.dec_btn').on('click', function () {
                let inputField = $(this).siblings('input[type="text"]');
                let currentValue = parseInt(inputField.val());

                if (isNaN(currentValue) || currentValue <= 0) {
                    return;
                }

                inputField.val(currentValue - 1);
            });
        }
        countProduct()

        
        // $(".product_card").on("click", function () {
        //     $(this).toggleClass("active");
        // });

        $(".product_card_order").on("click", function () {
            $(this).toggleClass("active");
        });

        $(".product_card_order .dec_btn, .product_card_order .inc_btn, .product_card_order input").on("click", function (event) {
            event.stopPropagation();
          
        });


        
      // ✅ Magnific Popup Configuration
        $('.playBtn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
            youtube: {
                index: 'youtube.com/',
                id: function (url) {
                // Support both ?v=ID and /embed/ID
                const watchMatch = url.match(/[?&]v=([^&]+)/);
                if (watchMatch && watchMatch[1]) return watchMatch[1];

                const embedMatch = url.match(/embed\/([^\?&]+)/);
                if (embedMatch && embedMatch[1]) return embedMatch[1];

                return null;
                },
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }
            }
            },
            callbacks: {
                close: function () {
                document.activeElement && document.activeElement.blur();
               
                setTimeout(() => {
                    $('#main-content, .slick-current .playBtn').first().focus();
                }, 100);
                }
            }
        });

        // ✅ Slick Slider Configuration
        $('.testimonial_card_area').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        easing: "ease-in-out",
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
        });

        function updatePlayButtonFocus() {
        $('.testimonial_card_area .slick-slide').each(function () {
            const $btn = $(this).find('.playBtn');
            const isHidden = $(this).attr('aria-hidden') === 'true';
            $btn.attr('tabindex', isHidden ? '-1' : '0');
            $btn.toggleClass('disabled', isHidden); 
        });
        }

        setTimeout(updatePlayButtonFocus, 100); 
        $('.testimonial_card_area').on('afterChange', updatePlayButtonFocus);

        $('.testimonial_card_area').on('click', '.playBtn', function (e) {
        const isHidden = $(this).closest('.slick-slide').attr('aria-hidden') === 'true';
        if (isHidden) {
            e.preventDefault();
            e.stopImmediatePropagation();
            return false;
        }
        });

        $(document).on("mouseenter", ".categories_area.style_1 ul li a", function () {
            $(this).find('.download_btn img').attr('src', './images/service/icon3.png');
            $(this).find('.pdf_btn img').attr('src', './images/service/icon5.png');
        });
        $(document).on("mouseleave", ".categories_area.style_1 ul li a", function () {
            $(this).find('.download_btn img').attr('src', './images/service/icon2.png');
            $(this).find('.pdf_btn img').attr('src', './images/service/icon4.png');
        });
        $(".progress-fill").each(function (index) {
            let bar = $(this);
            let value = bar.data("value");
            let valueText = $(".progress-value").eq(index);
            gsap.to(bar, {
                width: value + "%",
                duration: 2,
                ease: "power2.out"
            });
            gsap.to(valueText[0], {
                innerHTML: value + "%",
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out"
            });
        });
        // FAQ Toggle
        const $faqs = $(".faq");

        if ($faqs.length > 1) {
            $faqs.eq(1).addClass("active");
            $faqs.eq(1).find(".answer").css("max-height", $faqs.eq(1).find(".answer")[0].scrollHeight + "px");
            $faqs.eq(1).find(".icon").text("−");
        }
        $(document).on("click", ".faq", function () {
            const $this = $(this);
            const $answer = $this.find(".answer");
            const $icon = $this.find(".icon");
            if (!$this.hasClass("active")) {
                $faqs.removeClass("active").find(".answer").css("max-height", "0");
                $faqs.find(".icon").text("+");
                $this.addClass("active");
                $answer.css("max-height", $answer[0].scrollHeight + "px");
                $icon.text("−");
            } else {
                $this.removeClass("active");
                $answer.css("max-height", "0");
                $icon.text("+");
            }
        });

        // Remove preloader after page load
       
        // Collect Area Slider
        $('.collect_area').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: false,
            nextArrow: false,
            dots: true,
            speed: 2000,
            easing: 'ease-in-out',
            dotsClass: 'docts-active-collect',
        });

        //blog post gallery
        $('.post-gallery').slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 300,
            rtl: false,
            prevArrow:
            "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
            "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
        });
        
    });
       
   
})(jQuery);
