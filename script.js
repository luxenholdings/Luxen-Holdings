const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobileMenu");
const luxen = document.querySelector(".luxen");
const holdings = document.querySelector(".holdings");

window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);

// Scroll Effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-white", "shadow-md");

        navLinks.forEach((link) => {
            link.classList.remove("text-white");
            link.classList.add("text-gray-700");
        });

        luxen.classList.replace("text-gray-200", "text-gray-600");
        holdings.classList.replace("text-white", "text-gray-800");

        hamburger.querySelectorAll("span").forEach((bar) => {
            bar.classList.replace("bg-white", "bg-gray-800");
        });
    } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-white", "shadow-md");

        navLinks.forEach((link) => {
            link.classList.add("text-white");
            link.classList.remove("text-gray-700");
        });

        luxen.classList.replace("text-gray-600", "text-gray-200");
        holdings.classList.replace("text-gray-800", "text-white");

        hamburger.querySelectorAll("span").forEach((bar) => {
            bar.classList.replace("bg-gray-800", "bg-white");
        });
    }
});

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

// herosection
document.addEventListener("DOMContentLoaded", function () {
    const heroLeft = document.querySelector(".hero-left");
    const heroRight = document.querySelector(".hero-right");
    const statCards = document.querySelectorAll(".stat-card");
    const pocard = document.querySelectorAll(".po-card");
    const avcard = document.querySelectorAll(".av-card");

    /* -----------------------------
     1️⃣ HERO ENTRY ANIMATION
  ----------------------------- */
    window.addEventListener("load", () => {
        setTimeout(() => {
            heroLeft.classList.add("show");
            heroRight.classList.add("show");
        }, 300);
    });

    /* -----------------------------
     2️⃣ COUNTER FUNCTION (Single Card)
  ----------------------------- */
    function animateCounter(counter) {
        const target = +counter.getAttribute("data-target");
        const hasPlus = counter.getAttribute("data-plus") === "true";

        const duration = 2000;
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const value = Math.floor(target * easeOut);
            counter.innerText = hasPlus ? value + "+" : value;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    /* -----------------------------
     3️⃣ OBSERVE EACH STAT CARD
  ----------------------------- */
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target.querySelector(".counter");
                    if (counter) {
                        animateCounter(counter);
                    }

                    observer.unobserve(entry.target); // run once per card
                }
            });
        },
        {
            threshold: 0.6,
        },
    );

    statCards.forEach((card) => {
        observer.observe(card);
    });
    pocard.forEach((card) => {
        observer.observe(card);
    });
    avcard.forEach((card) => {
        observer.observe(card);
    });
});

const mobilePortfolioBtn = document.getElementById("mobilePortfolioBtn");
const mobilePortfolioMenu = document.getElementById("mobilePortfolioMenu");
const plusi = document.getElementById("plusi");
let clicks=0
mobilePortfolioBtn.addEventListener("click", () => {
    if(clicks<1){
        mobilePortfolioMenu.classList.remove("hidden");
        plusi.classList.add("hidden")
    }else{
        window.location='/portfolio.html'
    }
    clicks=clicks+1
});

const popup = document.getElementById("popup");
const popupBox = document.getElementById("popupBox");
const picon = document.getElementById("p-icon");
const pstatus = document.getElementById("p-status");
const pdata = document.getElementById("p-data");
const pbutton = document.getElementById("p-button");

function showPopup(status, data) {
    popup.classList.remove("invisible");
    // make visible first
    if (status == true) {
        pstatus.innerHTML = "Success!";
        picon.innerHTML = "✔";
        pdata.innerHTML = data;
        picon.classList.add("bg-green-100", "text-green-600");
        pbutton.classList.add("bg-green-500", "hover:bg-green-600");
    } else {
        pstatus.innerHTML = "Failed!";
        picon.innerHTML = "✖";
        pdata.innerHTML = data;
        picon.classList.add("bg-red-100", "text-red-600");
        pbutton.classList.add("bg-red-500", "hover:bg-red-600");
    }

    // allow DOM to render before animation
    setTimeout(() => {
        popup.classList.remove("opacity-0");
        popupBox.classList.remove("opacity-0", "scale-90", "translate-y-4");
    }, 10);

    // auto close after 5s
    setTimeout(closePopup, 5000);
}

function closePopup() {
    // start smooth exit animation
    popup.classList.add("opacity-0");
    popupBox.classList.add("opacity-0", "scale-90", "translate-y-4");
    picon.classList.remove("bg-red-100", "text-red-600");
    pbutton.classList.remove("bg-red-500", "hover:bg-red-600");
    picon.classList.remove("bg-green-100", "text-green-600");
    pbutton.classList.remove("bg-green-500", "hover:bg-green-600");

    setTimeout(() => {
        popup.classList.add("invisible");
    }, 300);
    // hide after animation completes
    // window.location.reload()
    document.getElementById("contact-form")?.reset()
    document.getElementById("careers-form")?.reset()
}
