"use strict";
// sticky navigation
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const headerHeight = header.getBoundingClientRect().height;

const stickyHead = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
    // header.classList.add("stick");
  } else {
    header.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyHead, {
  root: null,
  threshold: 0.15,
});
headerObserver.observe(hero);

// copyright
const date = document.querySelector(".date");

const now = new Date();
const y = now.getFullYear();
date.textContent = y;
