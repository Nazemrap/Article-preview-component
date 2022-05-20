"use strict";

const btnArrow = document.querySelector(".share-arrow");
const socialLinks = document.querySelector(".socials-links");
const arrow = document.querySelector(".arrow");
const link = document.querySelectorAll(".social-link");
const body = document.querySelector(".page");

btnArrow.addEventListener("click", function () {
  const largeur = window.innerWidth;
  socialLinks.classList.toggle("hide");
  arrow.classList.toggle("arrow-change");
  if (largeur > 800) {
    btnArrow.classList.toggle("background-change");
  } else {
    btnArrow.classList.toggle("background-small");
  }
});

link.forEach((socialslinks) => {
  socialslinks.addEventListener("click", function () {
    socialLinks.classList.add("hide");
    arrow.classList.toggle("arrow-change");
    if (largeur > 800) {
      btnArrow.classList.toggle("background-change");
    } else {
      btnArrow.classList.toggle("background-small");
    }
  });
});
