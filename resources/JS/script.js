const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // Adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");

        // Adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}


/* Event Listener */

toggle.addEventListener("click", toggleMenu, false);

