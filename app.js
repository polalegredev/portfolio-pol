/**
 * Pol Alegre Martinez - Portfolio JavaScript
 * Lógica de interactividad, efectos spotlight, línea de tiempo animada,
 * validación de formulario y traducción dinámica en 3 idiomas (ES / CA / EN).
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. NAV BEHAVIOR (STICKY & RESPONSIVE TOGGLE)
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Scroll Navbar effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });


    /* ==========================================================================
       2. SCROLL REVEAL ANIMATIONS (Intersection Observer)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ==========================================================================
       3. SPOTLIGHT HOVER EFFECT (Interactive Card Glow)
       ========================================================================== */
    const spotlightCards = document.querySelectorAll('.spotlight-card');

    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });


    /* ==========================================================================
       4. HERO BROWSER MOCKUP WORKFLOW SLIDESHOW
       ========================================================================== */
    const browserSlides = document.querySelectorAll('.browser-slide');
    const progressBarItems = document.querySelectorAll('.progress-bar-item');
    let activeSlideIndex = 0;
    let progressInterval = null;
    const SLIDE_DURATION = 4000; // 4 seconds per slide
    const PROGRESS_TICK = 50; // Update progress bar every 50ms

    if (browserSlides.length > 0 && progressBarItems.length > 0) {
        startMockupSlideshow();

        // Allow clicking on progress tabs to switch slide
        progressBarItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                goToSlide(index);
            });
        });
    }

    function startMockupSlideshow() {
        let startTime = Date.now();
        
        // Reset all fills
        progressBarItems.forEach(item => {
            const fill = item.querySelector('.progress-fill');
            if (fill) fill.style.width = '0%';
        });

        // Set interval for filling progress bar
        clearInterval(progressInterval);
        progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const percentage = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
            
            const activeItem = progressBarItems[activeSlideIndex];
            if (activeItem) {
                const fill = activeItem.querySelector('.progress-fill');
                if (fill) fill.style.width = `${percentage}%`;
            }

            if (elapsed >= SLIDE_DURATION) {
                // Time's up, go to next slide
                goToNextSlide();
            }
        }, PROGRESS_TICK);
    }

    function goToNextSlide() {
        const nextIndex = (activeSlideIndex + 1) % browserSlides.length;
        goToSlide(nextIndex);
    }

    function goToSlide(index) {
        // Clear active classes
        browserSlides[activeSlideIndex].classList.remove('active');
        progressBarItems[activeSlideIndex].classList.remove('active');
        const oldFill = progressBarItems[activeSlideIndex].querySelector('.progress-fill');
        if (oldFill) oldFill.style.width = '0%';

        // Update active index
        activeSlideIndex = index;

        // Set active classes
        browserSlides[activeSlideIndex].classList.add('active');
        progressBarItems[activeSlideIndex].classList.add('active');

        // Restart slideshow loop
        startMockupSlideshow();
    }


    /* ==========================================================================
       5. INTERNATIONALIZATION (ES / CA / EN)
       ========================================================================== */
    let currentLanguage = 'es';
    const langBtns = document.querySelectorAll('.lang-btn');

    // Load language preference
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang && (savedLang === 'es' || savedLang === 'ca' || savedLang === 'en')) {
        currentLanguage = savedLang;
    } else {
        // Detect browser language
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === 'ca' || browserLang === 'en') {
            currentLanguage = browserLang;
        }
    }

    // Initialize translations
    setLanguage(currentLanguage);

    // Language Toggle Click Event
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetLang = btn.getAttribute('data-lang');
            setLanguage(targetLang);
        });
    });

    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('preferred-lang', lang);

        // Check if translations dictionary exists
        if (typeof translations === 'undefined') {
            console.error('El diccionario de traducciones no está disponible.');
            return;
        }

        const dict = translations[lang];
        if (!dict) return;

        // Translate text elements
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Translate input placeholders
        const placeholdersToTranslate = document.querySelectorAll('[data-i18n-placeholder]');
        placeholdersToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // Update active class on selector buttons
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update HTML lang attribute for accessibility/SEO
        document.documentElement.setAttribute('lang', lang);
    }


    /* ==========================================================================
       6. CONTACT FORM VALIDATION & HANDLING
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formSuccessAlert = document.getElementById('form-success');
    const btnSubmitForm = document.getElementById('btn-submit-form');

    const sendingTexts = {
        es: 'Enviando consulta...',
        ca: 'Enviant consulta...',
        en: 'Sending inquiry...'
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Honeypot spam/bot protection
            const honeypotWebsite = document.getElementById('form-website');
            if (honeypotWebsite && honeypotWebsite.value.trim() !== '') {
                console.warn('Bot detected and blocked via honeypot.');
                contactForm.reset();
                return;
            }
            
            // Form Fields
            const fieldName = document.getElementById('form-name');
            const fieldEmail = document.getElementById('form-email');
            const fieldPhone = document.getElementById('form-phone');
            const fieldMessage = document.getElementById('form-message');

            let isFormValid = true;

            // Name validation
            if (!fieldName.value.trim()) {
                showFieldError(fieldName, true);
                isFormValid = false;
            } else {
                showFieldError(fieldName, false);
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!fieldEmail.value.trim() || !emailRegex.test(fieldEmail.value.trim())) {
                showFieldError(fieldEmail, true);
                isFormValid = false;
            } else {
                showFieldError(fieldEmail, false);
            }

            // Phone validation (Spanish number format: 9 digits starting with 6, 7 or 9)
            const phoneRegex = /^[679]\d{8}$/;
            const sanitizedPhone = fieldPhone.value.replace(/\s+/g, '');
            if (!sanitizedPhone.trim() || !phoneRegex.test(sanitizedPhone)) {
                showFieldError(fieldPhone, true);
                isFormValid = false;
            } else {
                showFieldError(fieldPhone, false);
            }

            // Message validation (min 10 characters)
            if (!fieldMessage.value.trim() || fieldMessage.value.trim().length < 10) {
                showFieldError(fieldMessage, true);
                isFormValid = false;
            } else {
                showFieldError(fieldMessage, false);
            }

            // Submit if valid
            if (isFormValid) {
                submitContactForm(contactForm, {
                    name: fieldName.value.trim(),
                    email: fieldEmail.value.trim(),
                    phone: sanitizedPhone,
                    message: fieldMessage.value.trim()
                });
            }
        });
    }

    // Toggle field errors
    function showFieldError(inputElement, hasError) {
        const parent = inputElement.parentElement;
        if (hasError) {
            parent.classList.add('has-error');
        } else {
            parent.classList.remove('has-error');
        }
    }

    // Submit form simulation
    function submitContactForm(formElement, data) {
        btnSubmitForm.disabled = true;
        const originalBtnText = btnSubmitForm.innerHTML;
        
        // Show localized loading message
        btnSubmitForm.innerHTML = `${sendingTexts[currentLanguage]} <span class="spinner"></span>`;

        fetch("https://formspree.io/f/mqejgdne", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            btnSubmitForm.disabled = false;
            btnSubmitForm.innerHTML = originalBtnText;

            if (response.ok) {
                // Show localized success alert
                formSuccessAlert.classList.add('show');
                formElement.reset();
                
                // Auto hide success alert
                setTimeout(() => {
                    formSuccessAlert.classList.remove('show');
                }, 8000);
            } else {
                alert("Error al enviar el formulario. Por favor, inténtalo más tarde.");
            }
        })
        .catch(error => {
            btnSubmitForm.disabled = false;
            btnSubmitForm.innerHTML = originalBtnText;
            console.error('Error de Formspree:', error);
            alert("Hubo un problema de conexión. Por favor, inténtalo más tarde.");
        });
    }

    /* ==========================================================================
       7. GSAP SCROLLTRIGGER HERO PARALLAX & ZOOM
       ========================================================================== */
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Parallax scroll on browser mockup in Hero
        gsap.to(".hero-browser-mockup", {
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: 50,
            scale: 0.97,
            ease: "none"
        });
        
        // Push container content up and fade out (separate layer parallax depth)
        gsap.to(".hero-text-side", {
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: -30,
            opacity: 0.5,
            ease: "none"
        });

        // Workflow step items fade up reveal & image unclip parallax
        const stepItems = document.querySelectorAll('.workflow-step-item');
        
        stepItems.forEach((item) => {
            const wrapper = item.querySelector('.workflow-step-image');
            const img = item.querySelector('.step-image-parallax');
            
            // 1. Reveal/expand image container: clip-path inset and scale up
            if (wrapper) {
                gsap.fromTo(wrapper, 
                    { 
                        scale: 0.9, 
                        opacity: 0.7,
                        clipPath: "inset(8% 8% 8% 8% round 20px)",
                        borderColor: "rgba(255, 255, 255, 0.05)"
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        clipPath: "inset(0% 0% 0% 0% round 16px)",
                        borderColor: "rgba(255, 255, 255, 0.12)",
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                            end: "top 55%",
                            scrub: 0.5
                        }
                    }
                );
            }

            // 2. Parallax vertical move of the image itself
            if (img && wrapper) {
                gsap.fromTo(img,
                    { yPercent: -15 },
                    {
                        yPercent: 15,
                        ease: "none",
                        scrollTrigger: {
                            trigger: wrapper,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            }
        });
    }
});
