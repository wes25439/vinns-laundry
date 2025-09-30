 const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });


let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // scrolling down → hide header
    header.style.top = "-80px"; 
  } else {
    // scrolling up → show header
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // avoid negative scroll
}, false);



