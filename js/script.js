/* Navbar Fixed */
const navbar = document.querySelector(".navbar");

/* Home */
const navHome = document.querySelector(".nav-home");
const homeContent = document.querySelector(".home");

/* Portfolio */
const navPortfolio = document.querySelector(".nav-portfolio");
const portfolioBtn = document.querySelector(".portfolio-btn");
const portfolioContent = document.querySelector(".portfolio");

/* Footer */
const footerStyle = document.body.querySelector("footer");

/* Home */
navHome.addEventListener("click", (e) => {
    homeContent.style.display = "block";
    footerStyle.style.bottom = "-220px";
    portfolioContent.style.display = "none";
    e.preventDefault();
});

/* Portfolio */
const navPortfolioStyle = function (e) {
    portfolioContent.style.display = "block";
    footerStyle.style.bottom = "-10px";
    homeContent.style.display = "none";
    e.preventDefault();
};

navPortfolio.addEventListener("click", navPortfolioStyle);
portfolioBtn.addEventListener("click", navPortfolioStyle);


/* Scroll Event */
document.addEventListener("scroll", () => {
    const navTop = 140;
    if (window.scrollY > navTop) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

/* Event Listener for toggle */
toggle.addEventListener("click", () => {
    if (navList.style.animationName === "openAnimation") {
        navList.style.animationName = "closeAnimation";
        document.body.style.overflow = "scroll";
        toggle.innerHTML = togglerImageOpen;
    } else {
        navList.style.animationName = "openAnimation";
        document.body.style.overflow = "hidden";
        toggle.innerHTML = togglerImageClose;
    }
});
