document.addEventListener("DOMContentLoaded", function() {
    
   
    gsap.from(".main-text", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    gsap.from(".eslogan", { opacity: 0, scale: 0, duration: 1, delay: 0.3 });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".analytics__item", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".analytics__item",
            start: "top 90%", 
            end: "bottom 20%", 
            toggleActions: "play none none reverse", 
        },
    });

    gsap.from(".cards__card", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".cards__card",
            start: "top 90%", 
            end: "bottom 20%", 
            toggleActions: "play none none reverse", 
        },
    });

    gsap.to(".cards__title", {
        opacity: 0,
        y: -100,
        duration: 1,
        scrollTrigger: {
            trigger: ".cards__title",
            start: "top -10%", 
            end: "bottom 98%", 
            toggleActions: "play none none reverse", 
        },
    });

    gsap.from(".packs__pack", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".packs__pack",
            start: "top 90%", 
            end: "bottom 20%", 
            toggleActions: "play none none reverse", 
        },
    });

    gsap.from(".about__client", {
        opacity: 0,
        y: -100,
        duration: 1,
        scrollTrigger: {
            trigger: ".about__client",
            start: "top 90%", 
            end: "bottom 20%", 
            toggleActions: "play none none reverse", 
        },
    });

    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'header', targets: '.main-tool-bar'}
      });
      
});




