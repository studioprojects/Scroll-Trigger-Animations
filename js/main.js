
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".one",
        start: "top 50%",
        end: "bottom 25%",
        markers: true,
        scrub: 2,
        pin: ".two",
        toggleActions: "restart pause reverse pause"
    },
})

tl.to(".one", {    
    x: 800,
    ease: "none",
    rotation: 360,
    duration: 5,
})
.to(".two", {
    backgroundColor: "purple",
    x: 800,
    duration: 3
})
.to(".three", {
    x: 800,
    duration: 3
})