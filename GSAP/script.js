gsap.to("#box", {
  x: 500,
  duration: 2,
  rotation: 90,
  delay: 1,
  ease: "elastic",
  backgroundColor: "blue",
  borderRadius: "50%",

  repeat: -1, // Loop
  yoyo: true, // Return
});

gsap.from("#box2", {
  y: 500,
  duration: 2,
  delay: 1,
  scale: 0.5,
  backgroundColor: "#000",
});

gsap.from(".font h1", {
  opacity: 0,
  stagger: 0.5,
  y: 30,
  duration: 1,
  delay: 1,
});

gsap.to(".tool1", {
  x: 1000,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});

gsap.to(".tool2", {
  x: 1000,
  duration: 1.5,
  delay: 2.5,
  backgroundColor: "yellow",

  // repeat: 1, // Repeat one more time
  // yoyo: true,
});

gsap.to(".tool3", {
  x: 1000,
  rotate: 360,
  duration: 1.5,
  scale: 0.5,
  borderRadius: "50%",
  delay: 4,
});

var tl = gsap.timeline();

tl.from(".logo", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl.from(".hero-w", {
  opacity: 0,
  duration: 1,
  scale: 0.2,
});
