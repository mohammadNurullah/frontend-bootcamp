"use scrict";

const nav = document.querySelector(".navbar");
const navMenu = document.querySelector("#nav_menu");

/////////////////////////////////////
// Menu fade animation

//---------will refactor it code-----------//
nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav-link");
    const brand = link.closest(".navbar").querySelector(".navbar-brand");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });
    brand.style.opacity = 0.5;
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav-link");
    const brand = link.closest(".navbar").querySelector(".navbar-brand");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
    brand.style.opacity = 1;
  }
});

/////////////////////////////////////////
// Passing value of mail field
const input = document.querySelector("input[type=text]");
const btnDark = document.querySelector(".btn-dark");

btnDark.addEventListener("click", function (e) {
  // console.log(input.value);

  console.log({
    mail: input.value,
  });
});

/////////////////////////////////////////
// Page navigation

// Event delegation
const navbarNav = document.querySelector(".navbar-nav");
navbarNav.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// const form = document.querySelector("form");
// form.addEventListener("submit", function (e) {});
