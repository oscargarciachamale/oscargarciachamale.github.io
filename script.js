document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // --- Append or integrate this into your script.js ---

const translations = {
    en: {
        "nav-about": "About",
        "nav-expertise": "Expertise",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-title": "Bridging Technical Execution with Product Strategy",
        "hero-subtitle": "I am a seasoned professional specializing in leading complex software delivery tracks while championing user-centric product discovery."
        // Add remaining portfolio text keys here
    },
    es: {
        "nav-about": "Sobre mí",
        "nav-expertise": "Experiencia",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "hero-title": "Uniendo la Ejecución Técnica con la Estrategia de Producto",
        "hero-subtitle": "Soy un profesional experimentado especializado en liderar la entrega de software complejos mientras defiendo el descubrimiento de productos centrados en el usuario."
        // Add remaining portfolio text keys here
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSwitchBtn = document.getElementById('lang-switch');
    const langEn = document.getElementById('lang-en');
    const langEs = document.getElementById('lang-es');

    // 1. Determine starting language (Saved preference -> Browser default -> English)
    const savedLang = localStorage.getItem('preferred-lang');
    const browserLang = (navigator.language || navigator.userLanguage).startsWith('es') ? 'es' : 'en';
    let currentLang = savedLang || browserLang;

    // Initialize the site language on load
    updateDOMToLanguage(currentLang);

    // 2. Click Event Listener
    langSwitchBtn.addEventListener('click', () => {
        // Toggle language selection
        currentLang = currentLang === 'en' ? 'es' : 'en';
        
        // Update storage and display
        localStorage.setItem('preferred-lang', currentLang);
        updateDOMToLanguage(currentLang);
    });

    // 3. Translation Engine Function
    function updateDOMToLanguage(lang) {
        // Update all elements with a data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Toggle visual active states on the UI text picker elements
        if (lang === 'es') {
            langEs.classList.add('active-lang');
            langEn.classList.remove('active-lang');
        } else {
            langEn.classList.add('active-lang');
            langEs.classList.remove('active-lang');
        }

        // Set HTML accessibility lang attribute
        document.documentElement.lang = lang;
    }
    });
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked on mobile
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Portfolio Interactive Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active status from previous buttons, add to current
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'flex';
                    // Optional: add a tiny fade-in effect if desired via CSS
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
