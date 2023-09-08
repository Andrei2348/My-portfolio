gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline();

// Анимация Hero
tl.fromTo('.navbar__item-link',{opacity: 0, y: -30}, {opacity: 1, y: 0, duration: 1, stagger: 0.2}, 3.2)
  .fromTo('.navbar__logo',{opacity: 0, y: -30}, {opacity: 1, y: 0, duration: 1}, 3.0)
  .fromTo('.hero__button-wrapper',{opacity: 0, y: 40}, {opacity: 1, y: 0, duration: 1.6, ease: 'elastic'}, 4.2)

// Анимация при скролле
gsap.to('.hero__content', {
  scrollTrigger:{
    trigger: '.hero',
    start: 'top top',
    scrub: true,
  },
  yPercent: 30,
  scale: 0.5,
  xPercent: -30,
  opacity: 0
})

gsap.to('.hero__bcg', {
  scrollTrigger:{
    trigger: '.hero',
    start: 'top top',
    scrub: true,
  },
  scale: 1.2,
})





