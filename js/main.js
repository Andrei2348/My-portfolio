// const hamburger = document.querySelector('.header .navbar .nav__list .hamburger');
const mobile__menu = document.querySelector('.header .navbar .nav__list ul');
const mobile__item = document.querySelectorAll('.header .navbar .nav__list ul li a');
const header = document.querySelector('.header');

// hamburger.addEventListener('click',()=>{
//   hamburger.classList.toggle('active');
//   mobile__menu.classList.toggle('active');
//   if(hamburger.classList.contains('active') & mobile__menu.classList.contains('active')){
//     document.body.style.overflow = 'hidden';
//   } else {
//     document.body.style.overflow = '';
//   };
// });

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = '#29323c';
	} else {
    header.style.backgroundColor = 'transparent';
	}
});

// mobile__item.forEach(item=>{
//   item.addEventListener('click', ()=>{
//     if(hamburger.classList.contains('active') & mobile__menu.classList.contains('active')){
//       hamburger.classList.remove('active');
//       mobile__menu.classList.remove('active');
//       document.body.style.overflow = '';
//     };
//   });
// });


$(function(){
	$('.about__advantages').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 4,
		speed: 500,
	});
})