//==========menu-burger===============
$('.icon-menu').click(function (event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
})

//==============scroll==============
$('a[href^="#"]').on('click', function () {

   let href = $(this).attr('href');

   $('html, body').animate({
      scrollTop: $(href).offset().top
   });
   return false;
});

//=================slider swiper=========
const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   centeredSlides: true,
   spaceBetween: 105,
   slidesPerView: 'auto',
   freeMode: true,
   effect: 'coverflow',

   coverflowEffect: {
      rotate: 5,
      slideShadows: true,
      stretch: 20,
   },
});

//=============slider-hero================
const sliderCards = document.querySelectorAll('.sliders__card');
const sliderTrack = document.querySelector('.slider__track');
const windowSize = document.body.clientWidth;
let width;
let count = 0;

function initial() {
   console.log("resize");
   width = document.querySelector('.slider').offsetWidth;
   sliderTrack.style.width = width * sliderCards.length + "px";

   sliderCards.forEach(item => {
      item.style.width = width + "px";
      //item.style.width = width / 3 + "px"; //кол-во  видимых слайдов 
      //item.style.width = width / 2 + "px"; //кол-во  видимых слайдов 

      item.style.height = "auto";
      rollSlider();

   });
}
window.addEventListener("resize", initial)
initial();

document.querySelector(".button__slider-prev").addEventListener("click", function () {
   count--;
   if (count < 0) {
      count = sliderCards.length - 1;
   }
   rollSlider();
});
document.querySelector(".button__slider-next").addEventListener("click", function () {
   count++;
   if (count >= sliderCards.length) {
      count = 0;
   }
   rollSlider();
});

function rollSlider() {
   sliderTrack.style.transform = 'translate(-' + count * width + 'px)';
   /* если виден один слайд прокручивает по одному
   если видны два слайда прокруивает по два 
   если видны три слайда прокруивает по три */

   //=====================2 слайда==================
   //sliderTrack.style.transform = 'translate(-' + count * width / 2 + 'px)';
   /* прокручивает один слайд при наличии двух видимых слайдов*/

   //sliderTrack.style.transform = 'translate(-' + count * width / 1.5 + 'px)';
   /* прокручивает полтора слайда при наличии двух видимых слайдов*/

   //==================3 слайда =====================
   //sliderTrack.style.transform = 'translate(-' + count * width / 1.5 + 'px)';
   /* прокручивает два слайда при наличии трех видимых слайдов*/

   //sliderTrack.style.transform = 'translate(-' + count * width / 3 + 'px)';
   /* прокручивает слайды по одному при наличии трех видимых слайдов */
}


