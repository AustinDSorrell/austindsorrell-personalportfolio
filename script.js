const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide img');

//Selectors
const backBtn = document.querySelector('#backBtn');
const nextBtn = document.querySelector('#nextBtn');

//Img Counter

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

//Button Listen

nextBtn.addEventListener('click',()=>{
    if (counter >= carouselImg.length -1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    console.log(counter)
});

backBtn.addEventListener('click',()=>{
    if (counter <=0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    console.log(counter)
});

carouselSlide.addEventListener('transitionend',()=> {
    if (carouselImg[counter].id ==='lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
    if (carouselImg[counter].id ==='firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
});