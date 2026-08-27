gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const travel = document.querySelector(".first").offsetWidth;

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".first",
        start: "top 80px",
        end: "+=150%",
        scrub: 0.2,          // reduced delay from 1 second
        markers: true,
        pin: true,
    }
});


// =====================================================
// MASALA COLA EXIT
// =====================================================

tl.to("#masala-cola", {
    motionPath: {
        path: [
            { x: "0%",    y: "0vh" },
            { x: "-40%",  y: "0.5vh" },
            { x: "-75%",  y: "2vh" },
            { x: "-130%", y: "12vh" },
            { x: "-180%", y: "35vh" },
            { x: "-220%", y: "80vh" }
        ],
        curviness: 1.5
    },
    opacity: 0,
    duration: 1.8,
    ease: "power1.inOut"
})


// =====================================================
// ZEERA COLA ENTER
// =====================================================

.fromTo("#zeera-cola",
    {
        x: "140%",
        opacity: 0
    },
    {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
    },
    "<0.8"
)


// =====================================================
// ZEERA COLORS / TEXT / LOGOS
// ALL START TOGETHER WITH ZEERA
// =====================================================

.to(".first", {
    backgroundColor: "rgb(255, 255, 195)",
    duration: 0.8,
    ease: "power1.inOut"
}, "<")

.to("#heading", {
    color: "rgb(107, 112, 46)",
    duration: 0.8,
    ease: "power1.inOut"
}, "<")

.to(".first", {
    "--grad-1": "rgb(81, 87, 41)",
    "--grad-2": "rgb(99, 96, 45)",
    "--grad-3": "rgb(173, 167, 47)",
    duration: 0.8,
    ease: "power1.inOut"
}, "<")

.to("#zyro-0", {
    opacity: 0,
    duration: 0.8,
    ease: "power1.inOut"
}, "<")

.to("#zeera-zero", {
    opacity: 1,
    duration: 0.8,
    ease: "power1.inOut"
}, "<")

.to("#zyro-00", {
    opacity: 0,
    duration: 0.8,
    ease: "power1.inOut"
}, "<")

.to("#zeera-zero1", {
    opacity: 1,
    duration: 0.8,
    ease: "power1.inOut"
}, "<")


// =====================================================
// ZEERA COLA EXIT
// =====================================================

.to("#zeera-cola", {
    motionPath: {
        path: [
            { x: "0%",    y: "0vh" },
            { x: "-40%",  y: "0.5vh" },
            { x: "-75%",  y: "2vh" },
            { x: "-130%", y: "12vh" },
            { x: "-180%", y: "35vh" },
            { x: "-220%", y: "80vh" }
        ],
        curviness: 1.5
    },
    opacity: 0,
    duration: 1.8,
    ease: "power1.inOut"
})


// =====================================================
// BLUE BOLT ENTER
// =====================================================

.fromTo("#blue-boolt",
    {
        x: "140%",
        opacity: 0
    },
    {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
    },
    "<0.8"
)


// =====================================================
// BLUE BOLT COLORS / TEXT / LOGOS
// =====================================================

.to(".first", {
    backgroundColor: "rgb(163, 196, 239)",
    duration: 0.8,
    ease: "power1.inOut"
}, "<")

.to("#heading", {
    color: "rgb(0, 44, 115)",
    duration: 0.8,
    ease: "power1.inOut"
}, "<")

.to("#bolt-zero", {
    opacity: 1,
    duration: 0.8,
    ease: "power1.inOut"
}, "<")

.to("#bolt-zero1", {
    opacity: 1,
    duration: 0.8,
    ease: "power1.inOut"
}, "<")


// =====================================================
// BLUE BOLT EXIT
// =====================================================

.to("#blue-boolt", {
    motionPath: {
        path: [
            { x: "0%",    y: "0vh" },
            { x: "-40%",  y: "0.5vh" },
            { x: "-75%",  y: "2vh" },
            { x: "-130%", y: "12vh" },
            { x: "-180%", y: "35vh" },
            { x: "-220%", y: "80vh" }
        ],
        curviness: 1.5
    },
    opacity: 0,
    duration: 1.8,
    ease: "power1.inOut"
});
