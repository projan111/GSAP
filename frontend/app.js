// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });

// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

// gsap.from("#page2 h1", {
//   opacity: 0,
//   duration:2,
//   x:-400,
//   scrollTrigger:{
//     trigger:"#page2 h1",
//     scroller: "body",
//     markers:true,
//     start: "top 60%",
//     scrub: 1,
//     pin:true
//   }
// })
// gsap.from("#page2 h2", {
//   opacity: 0,
//   duration:2,
//   x:400,
//   scrollTrigger:{
//     trigger:"#page2 h2",
//     scroller: "body",
//     markers:true,
//     start: "top 60%",
//     scrub: 1,
//     pin:true
//   }
// })

gsap.to("#page3 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -100",
    pin: true,
    scrub: 2,
  },
});

gsap.to("#page2 img", {
  duration: 1,
  scale: 2,
  scrollTrigger: {
    trigger: "#page2",
    scroller:"body",
    // markers: true,
    start: "top 60%",
    end: "top 0%",
    scrub: true,
  },
});
