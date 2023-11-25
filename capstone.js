// function toggleMenu() {
//     var navbarMobile = document.getElementById("navbar-mobile");
//     if (navbarMobile.style.display === "block") {
//         navbarMobile.style.display = "none";
//     } else {
//         navbarMobile.style.display = "block";
//     }
// }

function toggleMenu() {
    var navbarMobile = document.getElementById("navbar-mobile");
    var hamburgerButton = document.querySelector(".hamburger");

    navbarMobile.classList.toggle('active');
    hamburgerButton.classList.toggle('active');
}
