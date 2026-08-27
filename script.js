gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const travel = document.querySelector(".first").offsetWidth;

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".first",
        start: "top 80px",
        end: "+=300%",      // increased from 100% — gives the animation more scroll distance to fully complete
        scrub: 0.2,
        markers: true,
        pin: true,
    }
});

// smooth curved exit using MotionPathPlugin instead of straight keyframes
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
        curviness: 1.5   // higher = smoother/rounder curve between points
    },
    opacity: 0,
    duration: 1.5,
    ease: "power1.inOut"
})
//can 2 entry

.fromTo("#zeera-cola",
    { x: "140%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" },
    "<0.8"
)
.to(".first", {
    backgroundColor: "rgb(255, 255, 195)",
    duration: 0.8,
    ease: "power1.inOut"
},"<")
.to("#heading",{
    color: "rgb(107, 112, 46)",
    duration: 0.8,
    ease: "power1.inOut"
},"<")

.to("#zyro-0", {
     opacity: 0,
    duration: 0.8,
    ease: "power1.inOut"
}, "<")
.to("#zeera-zero",{
  opacity: 1,
  duration: 0.8,
  ease: "power1.inOut"
},"<")
.to("#zyro-00",{
    opacity: 0,
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#zeera-zero1",{
    opacity: 1,
    duration: 0.8,
    ease: "power1.inOut"
  },"<")
  tl.to("#zeera-cola", {
    motionPath: {
        path: [
            { x: "0%",    y: "0vh" },
            { x: "-40%",  y: "0.5vh" },
            { x: "-75%",  y: "2vh" },
            { x: "-130%", y: "12vh" },
            { x: "-180%", y: "35vh" },
            { x: "-220%", y: "80vh" }
        ],
        curviness: 1.5   // higher = smoother/rounder curve between points
    },
    opacity: 0,
    duration: 1.5,
    ease: "power1.inOut"
})
.fromTo("#blue-boolt",
    { x: "140%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" },
    "<0.8"
)
.to(".first", {
    backgroundColor: "rgb(163, 196, 239)",
    duration: 0.8,
    ease: "power1.inOut"
},"<")
.to("#heading",{
    color: "rgb(0, 44, 115)",
    duration: 0.8,
    ease: "power1.inOut"
},"<")

.to("#zeera-zero",{
    opacity: 0,
    duration: 0.8,
    ease: "power1.inOut"
  },"<")
.to("#bolt-zero",{
  opacity: 1,
  duration: 0.8,
  ease: "power1.inOut"
},"<")
.to("#zeera-zero1",{
    opacity: 0,
    duration: 0.8,
    ease: "power1.inOut"
  },"<")
.to("#bolt-zero1",{
    opacity: 1,
    duration: 0.8,
    ease: "power1.inOut"
  },"<")
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
        curviness: 1.5   // higher = smoother/rounder curve between points
    },
    opacity: 0,
    duration: 1.5,
    ease: "power1.inOut"
})
.fromTo("#berry-blast",
    {
        x:"140%",
        opacity:0,
    },
    {
        x:"0%",
        opacity:1,
        duration:1.5,
        ease:"power2.out"
    },
    "<0.8"
)
.to(".first",{
    backgroundColor:"rgb(237, 185, 223)",
    duration: 0.8,
    ease :"power1.inOut",
},"<")
.to("#heading",{
    color:"rgb(126, 36, 71)",
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#blue-boolt",{
    opacity: 0,
    duration: 0.8,
    ease: "power1.inOut"
  },"<")
.to("#berry-zero",{
    opacity: 1,
    duration: 0.8,
    ease: "poer1.inOut",
},"<")
.to("#blue-boolt",{
    opacity: 0,
    duration: 0.8,
    ease: "power1.inOut"
  },"<")
.to("#berry-zero1",{
    opacity:1,
    duration:0.8,
    ease:"power1.inOut",
},"<")
.to("#berry-blast", {
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
    duration: 1.5,
    ease: "power1.inOut"
})


.fromTo("#ginger-ale",
    {
        x: "140%",
        opacity: 0
    },
    {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
    },
    "<0.8"
)
.to(".first",{
    backgroundColor:"rgb(102, 193, 126)",
    duration: 0.8,
    ease :"power1.inOut",
},"<")
.to("#heading",{
    color:"rgb(1, 116, 59)",
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#berry-zero",{
    opacity: 0,
    duration: 0.8,
    ease: "power1.inOut"
  },"<")
.to("#ginger-zero",{
    opacity:1,
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#berry-zero1",{
    opacity: 0,
    duration: 0.8,
    ease: "power1.inOut"
  },"<")
.to("#ginger-zero1",{
    opacity:1,
    duration: 0.8,
    ease: "power1.inOut",
},"<")

.to("#ginger-ale", {
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
    duration: 1.5,
    ease: "power1.inOut"
})

.fromTo("#tonic-water",
    {
        x: "140%",
        opacity: 0
    },
    {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
    },
    "<0.8"
)
.to(".first",{
    backgroundColor:"rgb(253, 229, 181)",
    duration: 0.8,
    ease :"power1.inOut",
},"<")
.to("#heading",{
    color:"rgb(253, 183, 27)",
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#ginger-zero",{
    opacity:0,
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#tonic-zero",{
    opacity:1,
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#ginger-zero1",{
    opacity:0,
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#tonic-zero1",{
    opacity:1,
    duration: 0.8,
    ease: "power1.inOut",
},"<")

.to("#tonic-water", {
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
    duration: 1.5,
    ease: "power1.inOut"
})

.fromTo("#vita-cola",
    {
        x: "140%",
        opacity: 0
    },
    {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
    },
    "<0.8"
)
.to(".first",{
    backgroundColor:"rgb(183, 183, 183)",
    duration: 0.8,
    ease :"power1.inOut",
},"<")
.to("#heading",{
    color:"rgb(0, 0, 0)",
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#tonic-zero",{
    opacity:0,
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#vita-zero",{
    opacity:1,
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#tonic-zero1",{
    opacity:0,
    duration: 0.8,
    ease: "power1.inOut",
},"<")
.to("#vita-zero1",{
    opacity:1,
    duration: 0.8,
    ease: "power1.inOut",
},"<")

.to("#vita-cola", {
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
    duration: 1.5,
    ease: "power1.inOut"
})
