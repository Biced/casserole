const countEl = document.querySelector(".count"),
    plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus");

plus.addEventListener('click', () => {

    countEl.value++;

    if (countEl.value > 9 && countEl.value < 99) {

        countEl.style.width = "50px";
    }
    if (countEl.value > 999 && countEl.value > 9999) {
        countEl.style.width = "74px";
    }
    if (countEl.value > 99 && countEl.value > 999) {
        countEl.style.width = "62px";
    }

});

minus.addEventListener('click', () => {
    if (countEl.value > 0) {

        countEl.value--;
    }


});
countEl.addEventListener('keydown', (e) => {


    countEl.style.width = "50px";

    if (countEl.value >= 10) {
        countEl.style.width = "62px";
    }
    if (countEl.value >= 100) {
        countEl.style.width = "74px";
    }

})


document.addEventListener("DOMContentLoaded", () => {
    if (screen.width < 760) {


        var mySwiper = new Swiper('.s1', {

            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'slide',
            speed: 500,



            pagination: {
                el: '.swiper-pagination',
            },

        })

        var mySwiper = new Swiper('.s2', {

            loop: true,
            slidesPerView: 2,
            spaceBetween: 16,
            effect: 'slide',
            speed: 500,



            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        })
    }

});