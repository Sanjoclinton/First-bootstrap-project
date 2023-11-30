const menuIcon = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".btn-close-white");
const letTalk = document.querySelector(".lets-talk");
const navContent = document.querySelector(".nav-content");
const navContentLinks = document.querySelector(".nav-content-links");
const mainPage = document.querySelector("main");
const btnContainer = document.querySelector(".btn-container");
const textClose = document.querySelector(".text-close");
const rightNavLinks = document.querySelector(".right-nav-links");
const rightNavLinksCont = document.querySelector(".right-nav-links-cont");
const navbarBrands = document.querySelectorAll(".navbar-brand");
const footer = document.querySelector("footer");

const toggleNav = function () {
  menuIcon.classList.toggle("d-none");
  letTalk.classList.toggle("d-none");
  btnContainer.classList.toggle("d-none");
  navContentLinks.classList.toggle("d-xxl-flex");
  navContent.classList.toggle("d-none");
  navContent.classList.toggle("d-flex");
  mainPage.classList.toggle("d-none");
  textClose.classList.toggle("d-xxl-inline-block");
  rightNavLinks.classList.toggle("d-xxl-flex");
  rightNavLinksCont.classList.toggle("d-xxl-flex");
  footer.classList.toggle("d-none");

  navbarBrands.forEach((item) => {
    item.classList.toggle("text-white");
    item.classList.toggle("text-secondary");
  });
};

menuIcon.addEventListener("click", function () {
  toggleNav();
});

closeBtn.addEventListener("click", function () {
  toggleNav();
});
