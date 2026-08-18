document.addEventListener("DOMContentLoaded", () => {
    // 1. Efecto sombra en el Header al hacer scroll
    const header = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
            header.style.padding = "5px 0";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
            header.style.padding = "0";
        }
    });

    // 2. Intersection Observer para las animaciones de entrada (Scroll reveal)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que ya apareció
            }
        });
    }, observerOptions);

    // Seleccionar todos los elementos a animar
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));
});