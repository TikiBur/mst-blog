const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelector('.nav-link');

burger?.addEventListener('click', (e) => {
    e.stopPropagation();
    navLink.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    const target = e.target;
    if (!navLink.contains(target) && !burger.contains(target)) {
        navLink.classList.remove('open');
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navLink.classList.add('scrolled');
    } else {
        navLink.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(el => observer.observe(el));
});