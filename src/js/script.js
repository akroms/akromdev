/* Content Shows After Animation */
setTimeout(() => {
    content.style.display = "block";
    loadder.style.display = "none";
}, 500);

/* Home */
navHome.addEventListener("click", (e) => {
    homeContent.style.display = "block";
    footerStyle.style.position = "fixed";
    portfolioContent.style.display = "none";
    aboutContent.style.display = "none";
    navList.style.animationName = "closeAnimation";
    document.body.style.overflowY = "scroll";
    e.preventDefault();
});

/* Portfolio */
const navPortfolioStyle = function (e) {
    portfolioContent.style.display = "block";
    footerStyle.style.position = "static";
    homeContent.style.display = "none";
    aboutContent.style.display = "none";
    
    if (navList.style.animationName === "openAnimation") {
        navList.style.animationName = "closeAnimation";
    }

    document.body.style.overflowY = "scroll";
    e.preventDefault();
};

/* About Me */
navAboutMe.addEventListener("click", (e) => {
    aboutContent.style.display = "block";
    homeContent.style.display = "none";
    footerStyle.style.position = "relative";
    footerStyle.style.bottom = "-135px";
    portfolioContent.style.display = "none";
    navList.style.animationName = "closeAnimation";
    document.body.style.overflowY = "scroll";
    e.preventDefault();
});

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
        document.body.style.overflowY = "scroll";
        
    } else {
        navList.style.animationName = "openAnimation";
        document.body.style.overflowY = "hidden";
    }
});
