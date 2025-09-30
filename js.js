 const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });



  let lastScrollTop = 0;
  

  window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // scrolling down → hide nav links
      navLinks.style.opacity = "0";
      navLinks.style.visibility = "hidden";
      navLinks.style.transition = "opacity 0.3s ease";
    } else {
      // scrolling up → show nav links
      navLinks.style.opacity = "1";
      navLinks.style.visibility = "visible";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
