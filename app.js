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


gsap.from("#page2 h1", {
  opacity: 0,
  duration:2,
  x:-400,
  scrollTrigger:{
    trigger:"#page2 h1",
    scroller: "body",
    markers:true,
    start: "top 60%",
    scrub: 1,
    pin:true
  }
})
gsap.from("#page2 h2", {
  opacity: 0,
  duration:2,
  x:400,
  scrollTrigger:{
    trigger:"#page2 h2",
    scroller: "body",
    markers:true,
    start: "top 60%",
    scrub: 1,
    pin:true
  }
})