// Mobile Menu
function openMenu() {
    mobileMenu.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100");
}

function closeMenu() {
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100");
}

hamburger.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);

const mobilePortfolioBtn = document.getElementById("mobilePortfolioBtn");
const mobilePortfolioMenu = document.getElementById("mobilePortfolioMenu");
let clicks=0
mobilePortfolioBtn.addEventListener("click", () => {
    if(clicks<1){
        mobilePortfolioMenu.classList.remove("hidden");
    }else{
        window.location='/portfolio.html'
    }
    clicks=clicks+1
});