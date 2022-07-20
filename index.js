gsap.to(".filled-text, .outline-text", {
  scrollTrigger: {
    trigger: ".filled-text, .outline-text",
    scrub: true,
    pin: true,
    start: "top bottom",
    end: "bottom -100%",
    toggleClass: "active",
    ease: "power2",
  },
  x: 200,
});

gsap.to(".image", {
  scrollTrigger: {
    trigger: ".filled-text, .outline-text",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom -300%",
    ease: "power2",
  },
  x: -450,
});
