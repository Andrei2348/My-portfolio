gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline();

// Анимация Hero
tl.fromTo('.navbar__item-link',{opacity: 0, y: -30}, {opacity: 1, y: 0, duration: 1, stagger: 0.2}, 3.2)
  .fromTo('.navbar__logo',{opacity: 0, y: -30}, {opacity: 1, y: 0, duration: 1}, 3.0)
  .fromTo('.hero__button-wrapper',{opacity: 0, y: 40}, {opacity: 1, y: 0, duration: 0.8}, 4.2)

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


// Projects section
gsap.from('.projects__subtitle', {
  scrollTrigger:{
    trigger: '.projects',
    start: '-20% center',
    end: '+=300px',
    scrub: true
  },
  opacity: 0.6,
  scale: 0.6,
  xPercent: -30
})

gsap.from('.projects__title', {
  scrollTrigger:{
    trigger: '.projects',
    start: '-20% center',
    end: '+=300px',
    scrub: true
  },
  opacity: 0.6,
  scale: 0.6
})


// Projects subcontent
gsap.from('.projects__subcontent', {
  scrollTrigger:{
    trigger: '.projects',
    start: '30% bottom',
    end: '+=300px',
    scrub: true
  },
  scale: 0,
  transformOrigin: 'top center',
})

gsap.from('.projects__item', {
  scrollTrigger:{
    trigger: '.projects',
    start: '10% center',
    end: '+=300px',
    scrub: true,
  },
  scale: 0.5,
  transformOrigin: 'center center',
  ease: 'none',
  stagger: 0.4
})

gsap.to('.projects__gallery', {
  scrollTrigger:{
    trigger: '.projects',
    start: '10% top',
    end: '+=400px',
    scrub: true
  },
  scale: 0.6,
  transformOrigin: 'top center',
  ease: 'none',
})

// About section
gsap.from('.about__subtitle', {
  scrollTrigger:{
    trigger: '.about',
    start: '-40% top',
    end: '+=300px',
    scrub: true
  },
  opacity: 0.6,
  xPercent: 30,
  scale: 0.6
})

gsap.from('.about__title', {
  scrollTrigger:{
    trigger: '.about',
    start: '-40% top',
    end: '+=400px',
    scrub: true
  },
  opacity: 0.6,
  scale: 0.6
})

gsap.from('.about__subcontent', {
  scrollTrigger:{
    trigger: '.about',
    start: '30% bottom',
    end: '+=300px',
    scrub: true
  },
  scale: 0,
  transformOrigin: 'top center',
})

gsap.from('.about__advantages', {
  scrollTrigger:{
    trigger: '.about',
    start: '-20% top',
    end: '+=400px',
    scrub: true
  },
  xPercent: 120,
  duration: 1
})
