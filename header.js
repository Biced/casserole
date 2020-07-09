const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");

const navItems = document.querySelectorAll(".nav-item");


//Set Initial State Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
navItems.forEach(item => item.addEventListener("click", closeMenu));

function closeMenu() {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");

    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
}

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");

        navItems.forEach(item => item.classList.add("show"));

        //Set Menu State
        showMenu = true;
        document.querySelector('.show').addEventListener('click', (e) => {
            if (e.target !== document.querySelector('.menu-nav') && e.target !== document.querySelector('.bottom-nav')) {
                toggleMenu();
            }
        })
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");

        navItems.forEach(item => item.classList.remove("show"));

        //Set Menu State
        showMenu = false;
    }
}

const htmlTag = document.querySelector('html'),
    bodyTag = document.querySelector('body'),
    nav = document.querySelector('.header'),
    searchBtn = document.querySelector('#search-icon'),
    searchMobile = document.querySelector('.mobile-search'),
    searchActive = document.querySelector('#search');

let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 100);
}

document.addEventListener('scroll', () => {
    nav.style.setProperty('background-color', scrolled() > 5 || document.querySelector('#search:focus') ? 'rgba(42, 43, 51, 0.8)' : 'transparent');
    if (nav.classList.contains("icons-header-black")) {
        nav.classList.remove("icons-header-black");
    }
})
searchActive.addEventListener('click', (e) => {
    if (document.querySelector('#search:focus')) {
        nav.style.backgroundColor = 'rgba(42, 43, 51, 0.8)';
        if (nav.classList.contains("icons-header-black")) {
            nav.classList.remove("icons-header-black");
        }
    }
});

searchBtn.addEventListener('click', () => {
    if (screen.width < 620) {
        searchMobile.style.display = "flex";
        navItems[0].style.marginTop = "0px";
        toggleMenu();
        searchMobile.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }
});