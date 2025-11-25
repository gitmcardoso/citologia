// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
    } else {
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
    }
});

// Simple Intersection Observer for Scroll Animations (AOS replacement)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            // Optional: Stop observing once animated
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    // Add base transition styles via JS to ensure they apply
    el.style.transition = 'all 0.8s ease-out';

    // Handle specific animations based on data-aos value
    const animType = el.getAttribute('data-aos');
    if (animType === 'fade-up') {
        el.style.transform = 'translateY(30px)';
    } else if (animType === 'fade-right') {
        el.style.transform = 'translateX(-30px)';
    } else if (animType === 'fade-left') {
        el.style.transform = 'translateX(30px)';
    } else if (animType === 'zoom-in') {
        el.style.transform = 'scale(0.9)';
    }

    observer.observe(el);
});

// Add class for the "in-view" state to reset transforms
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .aos-animate {
        opacity: 1 !important;
        transform: translate(0) scale(1) !important;
    }
`;
document.head.appendChild(styleSheet);
