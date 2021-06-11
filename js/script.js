window.onload = function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("menu");
    const download = document.getElementById("download-project");
    const navLink = document.querySelectorAll(".nav-link");

    console.log(navLink);

    hamburger.addEventListener("click", mobileMenu);
    download.addEventListener("click", createZip);
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

    function createZip() {
        zipper.sync.zip("../").compress().save("./res/ctd-fe1.zip");
    }
}