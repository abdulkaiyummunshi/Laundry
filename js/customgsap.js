gsap.registerPlugin(ScrollTrigger);
function initGSAPAnimations() {
    if (window.innerWidth > 768) {
        animateAboutCardWrapper();
        //animateAboutPageOverlyCard();
    }
    animatePackagesTitleWrapper();
    animateBlogNewsContains();
    animateTeamMemberCardWrapper();
    animateInnerPageOverlySpan();
}
function animateAboutCardWrapper() {
    const aboutCardWrappers = document.querySelectorAll(".about_card_wrapper"); 
    if (aboutCardWrappers.length > 0) {
        gsap.from(aboutCardWrappers, {
            scrollTrigger: {
                trigger: ".about_counting_card_area",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -400,
            opacity: 0,
            rotate: 360,
            duration: 1,
            stagger: 0.3,  
        });
    }
}
function animateAboutPageOverlyCard() {
    const aboutPageOverlyCard = document.querySelector(".about_page_overly_card");
    if (aboutPageOverlyCard) {
        gsap.to(aboutPageOverlyCard, {
            x: 150,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });
    }
}
function animatePackagesTitleWrapper() {
    const packagesTitleWrapper = document.querySelectorAll(".packages_title_wrapper");  // Select all elements
    if (packagesTitleWrapper.length > 0) {
        gsap.from(packagesTitleWrapper, {
            scrollTrigger: {
                trigger: ".price_packages_area",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3, 
        });
    }
}
function animateBlogNewsContains() {
    const blogNewsContains = document.querySelectorAll(".blog_news_contains");
    if (blogNewsContains.length > 0) {
        gsap.from(blogNewsContains, {
            scrollTrigger: {
                trigger: ".blog_news_container",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
        });
    }
}
function animateTeamMemberCardWrapper() {
    const teamMemberCardWrappers = document.querySelectorAll(".team_member_card_wrapper");  // Select all elements
    if (teamMemberCardWrappers.length > 0) {
        gsap.from(teamMemberCardWrappers, {
            scrollTrigger: {
                trigger: ".team_member_card_area",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.4,
        });
    }
}
function animateInnerPageOverlySpan() {
    const innerPageOverlySpans = document.querySelectorAll(".inner_page_overly .container-xxl h1 span"); 
    if (innerPageOverlySpans.length > 0) {
        gsap.from(innerPageOverlySpans, {
            x: 100,
            opacity: 0,
            duration: 2,
            stagger: 0.3,
            ease: "power3.out",
        });
    }
}
document.addEventListener("DOMContentLoaded", function () {
    initGSAPAnimations();
});
