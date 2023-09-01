// gsap.from()


let tl = gsap.timeline();
tl.from('.hero', {opacity: 0, duration: 1})
  .from('.navbar', {opacity: 0, duration: 2})
  .from('.hero__button-wrapper', {opacity: 0, y: 70, duration: 0.8}, "-=0.5")