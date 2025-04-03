gsap.from(".header_contact_area .social_media span", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})
gsap.from(".header-area .logo a", {
    x: -200,
    display: "none",
    duration: 1,
    delay: 0.3,
})

gsap.from(".header-area .btn_wrapper", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5
})
let tl = gsap.timeline();
tl.from(".header_contact_area .social_media li, .review_card_wapper li", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.1
})

let ctl = gsap.timeline();
ctl.from(".contact_info_wrapper, .review_card_wapper p", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.3
})
let menutl = gsap.timeline();
menutl.from(".header-area .main_menu li", {
    // y:30,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    stagger: 0.1
})
gsap.from(".sub_heading h4", {
    x: -290,
    duration: 1,
    delay: 0.6,
    opacity: 0,

})

let hedingh1 = gsap.timeline();
hedingh1.from(".heading h1", {
    x: -400,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    stagger: 0.4,
});



let pictl = gsap.timeline();
pictl.from(".hero_user_meta img", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2
})
let checktl = gsap.timeline({
    scrollTrigger: {
        trigger: ".check_list_area",
        start: "top 80%",  
        end: "bottom 50%", 
        toggleActions: "play none none none" 
    }
});

checktl.from(".check_list_area ul li", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});


gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll("h2").forEach((h2) => {
    gsap.from(h2, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: h2,
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });
});


// document.querySelectorAll("p").forEach((p) => {
//     gsap.from(p, {
//         opacity: 0,
//         y: 50,
//         duration: 1.2,
//         scrollTrigger: {
//             trigger: p,
//             start: "top 85%",
//             toggleActions: "play none none none",
//         }
//     });
// });


document.querySelectorAll("img").forEach((img) => {
    gsap.from(img, {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".blog_news_contains", {
    x: -400,
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".blog_news_section",
        start: "top 80%",
        end: "top 0%",
        toggleActions: "play none none none",
        // markers: true, 
    }
});


