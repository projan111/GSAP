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
