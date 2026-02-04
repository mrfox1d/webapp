console.log("Animation loaded");

document.querySelectorAll(
    "section, .card, .why-card, h2, .cta p, .cta button"
).forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = (i * 0.08) + "s"; 
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 80) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);