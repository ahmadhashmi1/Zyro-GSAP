gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".first",
        start: "top 80px",
        end: "+=150%",      // increased from 100% — gives the animation more scroll distance to fully complete
        scrub: 1,
        markers: true,
        pin: true,
    }
});

// smooth curved exit using MotionPathPlugin instead of straight keyframes
tl.to("#masala-cola", {
    motionPath: {
        path: [
            { x: "0%",    y: "0vh" },
            { x: "-60%",  y: "5vh" },
            { x: "-140%", y: "35vh" },
            { x: "-220%", y: "80vh" }
        ],
        curviness: 1.5   // higher = smoother/rounder curve between points
    },
    opacity: 0,
    duration: 1.8,
    ease: "power1.inOut"
})
//can 2 entry

.fromTo("#zeera-cola",
    { x: "140%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 1.2, ease: "power2.out" },
    "<0.2"
)
.to("#first", {
    backgroundColor: "#5b5e31",
    duration: 1,
    ease: "power1.inOut"
},"<")
.to("#heading",{
    color: "rgb(228, 219, 30)",
    duration: 1,
    ease: "power1.inOut"
},"<")
.to(".first", {
    "--grad-1": "rgb(81, 87, 41)",   // soft light grey
    "--grad-2": "rgb(99, 96, 45)",   // chalky off-white
    "--grad-3": "rgb(173, 167, 47)",   // muted warm grey
    
    duration: 1,
    ease: "power1.inOut"
}, "<")
.to("#zyro-0", {
    opacity: 0.2,
    duration: 1,
    ease: "power1.inOut"
}, "<")