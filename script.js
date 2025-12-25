// --- Mobile Menu Toggle ---
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// --- Scroll Animation Observer ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'show' class when element enters viewport
            entry.target.classList.add('show');
            // Stop observing once animated (optional: remove this line if you want it to animate every time)
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// --- Initialize Observer on all hidden elements ---
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
