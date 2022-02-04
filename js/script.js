/* Selectors and Variables */
const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
/* Event Listeners */
toggle.addEventListener("click", () => {
    if (navList.style.animationName === "openAnimation") {
        navList.style.animationName = "closeAnimation";
    } else {
        navList.style.animationName = "openAnimation";
    }
});

