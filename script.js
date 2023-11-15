const menuIcon = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".btn-close-white");
const letTalk = document.querySelector('.talk');
const navContent = document.querySelector('#nav-content');
const mainPage = document.querySelector('main');

const toggleNav = function () {
    menuIcon.classList.toggle("none-nav");
    letTalk.classList.toggle("opac-0");
    closeBtn.classList.toggle("none-nav");
    navContent.classList.toggle("none-nav");
    mainPage.classList.toggle("none-nav");
};

menuIcon.addEventListener('click', function () {
    toggleNav();
});

closeBtn.addEventListener('click', function () {
    toggleNav();
});
