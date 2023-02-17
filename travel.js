var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    body.classList.toggle('noactive');
})