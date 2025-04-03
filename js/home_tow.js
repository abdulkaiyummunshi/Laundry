$('.hero_section_area.home_tow_area').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    dots: true,
    dotsClass: 'home_two_dots',
    // autoplay: true,
    // autoplaySpeed: 2000,
});
$('.testimonial_card_area').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1100,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
        },
        {
            breakpoint: 480,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
        }
    ]
});
