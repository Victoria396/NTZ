// код для переключения табов в меню
const headerTab = document.querySelectorAll(".header__item-tab"); //табы
const headerItem = document.querySelectorAll(".header__tabs"); //тело табов
const headerSvg = document.querySelectorAll(".svg-down"); // стрелки рядом с табами
const headerback = document.querySelector(".header"); //фон header

headerTab.forEach(onTabClick); 
    function onTabClick(item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTub = document.querySelector(tabId);
            let currentHeader = document.querySelector(".header");
            
        if( !currentBtn.classList.contains('header__item-active')) {
            headerTab.forEach(function(item){
                item.classList.remove('header__item-active');
            });

            headerItem.forEach(function(item){
                item.classList.remove('header__tabs-active');
            });


            currentHeader.classList.add('header-active');
            currentBtn.classList.add('header__item-active');
            currentTub.classList.add('header__tabs-active');
            }
        });
}

// код для большого слайдера
let offset = 0;
const sliderLine = document.querySelector(".bigSlider__line");
const screenWidth = window.screen.width;
let slideWidth = document.querySelector(".bigSlider__slide1").offsetWidth;

document.querySelector(".bigSlider__next").addEventListener('click', function() {
    offset += slideWidth;
    console.log(offset);
    if (offset > slideWidth) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector(".bigSlider__prev").addEventListener('click', function() {
    offset -= slideWidth;
    if (offset < 0) {
        offset = slideWidth;
    }
    sliderLine.style.left = -offset + 'px';
});

// код для слайдера со специалистами
const specLine = document.querySelector(".specialist__line");
let specSlideWidth = document.querySelector(".specialist__slide1").offsetWidth;
console.log(specSlideWidth);
let offset2 = 0;

    document.querySelector(".specialist__next").addEventListener('click', function() {
    offset2 += specSlideWidth / 2;
    console.log(offset2);
    if (offset2 > specSlideWidth / 2) {
        offset2 = 0;
    }

    if (screenWidth < 551) {
        specLine.style.left = 2.3* -offset2 + 'px';
    } else {
        specLine.style.left = -offset2 + 'px';
    }
});

document.querySelector(".specialist__prev").addEventListener('click', function() {
    offset2 -= specSlideWidth / 2;

    if (offset2 < 0) {
        offset2 = specSlideWidth / 2;
    }

    if (screenWidth < 551) {
        specLine.style.left = 2.3* -offset2 + 'px';
    } else {
        specLine.style.left = -offset2 + 'px';
    }
});
