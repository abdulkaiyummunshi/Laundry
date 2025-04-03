$(document).ready(function () {

    // Sidebar (Off-Canvas Menu) Toggle
    $(".mobile-menu-toggle-btn, .mobile-menu-bar").on("click", function () {
        $(".menu-sidebar-area, .body-overlay").addClass("active");
    });

    $(".menu-sidebar-close-btn, .cross_btn, .body-overlay").on("click", function () {
        $(".menu-sidebar-area, .body-overlay").removeClass("active");
    });

    // Sticky Navbar
    function addStickyNav(navSelector, scrollOffset = 200, activeClass = 'active') {
        let nav = $(navSelector);
        $(window).on('scroll', function () {
            $(window).scrollTop() > scrollOffset ? nav.addClass(activeClass) : nav.removeClass(activeClass);
        });
    }
    addStickyNav('#top_nav');

    $(window).on("scroll", function () {
        $("#header_area").toggleClass("scrolled", $(window).scrollTop() > 100);
    });

    // Dropdown Menu
   



    // Slick Sliders
    $('.hero_section_area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    });
    $('.blog_slider_wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    });

    var $cleaningSlider = $('.cleaning_container_area');
    $cleaningSlider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        dotsClass: 'container_area docts-active',
        responsive: [
            { breakpoint: 1190, settings: { slidesToShow: 3 } },
            { breakpoint: 924, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
    });

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
    $(".tab").click(function () {
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });

});



// Scroll-triggered Counter Animation
document.querySelectorAll(".about_count").forEach(counter => {
    let targetValue = counter.getAttribute("data-count").replace(/\D/g, "");
    let suffix = counter.getAttribute("data-count").replace(/\d/g, "");

    gsap.to(counter, {
        innerText: targetValue,
        snap: "innerText",
        ease: "power2.out",
        duration: 3,
        scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        onUpdate: function () {
            counter.innerText = Math.round(counter.innerText) + suffix;
        },
        onStart: () => {
            gsap.to(counter, { opacity: 1, scale: 1, duration: 0.5 });
        }
    });
});



const dropdownButtons = document.querySelectorAll(".dropdown_btn");

dropdownButtons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents event bubbling
        const parentLi = btn.closest("li");
        const dropdown = parentLi.querySelector(".dropdown");

        if (dropdown) {
            if (dropdown.classList.contains("active")) {
                dropdown.style.maxHeight = "0"; // Collapse
                dropdown.classList.remove("active");
            } else {
                dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Expand
                dropdown.classList.add("active");
            }
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const dropdownBtns = document.querySelectorAll(".dropdown_btn");

//     dropdownBtns.forEach((btn) => {
//         btn.addEventListener("click", function () {
//             const dropdown = this.parentElement.nextElementSibling;

//             if (dropdown.classList.contains("active")) {
//                 dropdown.classList.remove("active");
//                 this.innerHTML = '<i class="fal fa-plus"></i>';
//             } else {

//                 document.querySelectorAll(".dropdown").forEach((drop) => drop.classList.remove("active"));
//                 document.querySelectorAll(".dropdown_btn i").forEach((icon) => icon.classList.replace("fa-minus", "fa-plus"));


//                 dropdown.classList.add("active");
//                 this.innerHTML = '<i class="fal fa-minus"></i>';
//             }
//         });
//     });
// });


