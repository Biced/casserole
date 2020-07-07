const countEl = document.getElementsByClassName("count"),
    plus = document.getElementsByClassName("plus"),
    minus = document.getElementsByClassName("minus");




for (let index = 0; index < countEl.length; index++) {
    const countEls = countEl[index];

    countEls.addEventListener('keydown', (e) => {


        countEls.style.width = "50px";

        if (countEls.value >= 10) {
            countEls.style.width = "62px";
        }
        if (countEls.value >= 100) {
            countEls.style.width = "74px";
        }

    })
}


for (let index = 0; index < plus.length; index++) {
    const pluses = plus[index];
    pluses.addEventListener('click', () => {

        countEl[index].value++;

        if (countEl[index].value > 9 && countEl.value < 99) {

            countEl[index].style.width = "50px";
        }
        if (countEl[index].value > 999 && countEl.value > 9999) {
            countEl[index].style.width = "74px";
        }
        if (countEl[index].value > 99 && countEl.value > 999) {
            countEl[index].style.width = "62px";
        }

    });

}


for (let index = 0; index < minus.length; index++) {
    const minuses = minus[index];
    minuses.addEventListener('click', () => {
        if (countEl[index].value > 0) {

            countEl[index].value--;
        }


    });
}



