window.onload = function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("menu");
    const navLink = document.querySelectorAll(".nav-link");

    console.log(navLink);

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(link => {
        link.addEventListener("click", closeMenu)
        console.log(link);
    });

    function mobileMenu() {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    }

    function closeMenu() {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    }
}