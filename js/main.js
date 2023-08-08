const burger = document.querySelector('.navbar__burger');
const mobile__menu = document.querySelector('.navbar__items');
const mobile__item = document.querySelectorAll('.navbar__item-link');
const header = document.querySelector('.header');

burger.addEventListener('click',()=>{
  burger.classList.toggle('active');
  mobile__menu.classList.toggle('active');
  if(burger.classList.contains('active') & mobile__menu.classList.contains('active')){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  };
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = '#29323c';
	} else {
    header.style.backgroundColor = 'transparent';
	}
});

mobile__item.forEach(item=>{
  item.addEventListener('click', ()=>{
    if(burger.classList.contains('active') & mobile__menu.classList.contains('active')){
      burger.classList.remove('active');
      mobile__menu.classList.remove('active');
      document.body.style.overflow = '';
    };
  });
});

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
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});
})