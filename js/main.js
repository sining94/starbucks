const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function(){
    window.scrollTo(0,0);
});

// gsap totop 이동
// toTop.addEventListener('click', function(){
//     gsap.to(window, .7, {
//         scrollTo: 0
//     });
// });

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        toTopEl.style.right='30px';
    } else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        toTopEl.style.right='-100px';
    }
},300));
// _.throttle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션);

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1,
    });
});

new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: {
        delay: 3000
    },
    loop: true
});

new Swiper('.promotion .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    } else{
        promotionEl.classList.remove('hide');
    }
});

function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.float1', 1, 15);
floatingObject('.float2', .5, 15);
floatingObject('.float3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

