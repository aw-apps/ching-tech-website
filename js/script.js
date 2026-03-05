let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');
let header = document.querySelector('.header');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   contactInfo.classList.remove('active');
   if (window.scrollY > 50) {
      header.classList.add('scrolled');
   } else {
      header.classList.remove('scrolled');
   }
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});