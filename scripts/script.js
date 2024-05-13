"use strict";

let sidebar = document.querySelector(".mobile-sidebar");
let hamburgerNav = document.querySelector(".hamb-logo");
let closeNav = document.querySelector(".exit-icon");

hamburgerNav.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

closeNav.addEventListener("click", () => {
  sidebar.style.display = "none";
});
