/**
 * Pol Alegre Martinez - Portfolio JavaScript
 * Lógica de interactividad, efectos spotlight, línea de tiempo animada,
 * validación de formulario y traducción dinámica en 3 idiomas (ES / CA / EN).
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
       1. NAV BEHAVIOR (STICKY & RESPONSIVE TOGGLE)
       ========================================================================== */
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky Scroll Navbar effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Hamburger Menu
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navToggle && navMenu) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });

  /* ==========================================================================
       2. SCROLL REVEAL ANIMATIONS (Intersection Observer)
       ========================================================================== */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  /* ==========================================================================
       3. SPOTLIGHT HOVER EFFECT (Interactive Card Glow)
       ========================================================================== */
  const spotlightCards = document.querySelectorAll(".spotlight-card");

  spotlightCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  /* ==========================================================================
       4. HERO BROWSER MOCKUP WORKFLOW SLIDESHOW (REMOVED)
       ========================================================================== */

  /* ==========================================================================
       5. INTERNATIONALIZATION (ES / CA / EN)
       ========================================================================== */
  let currentLanguage = "es";
  const langBtns = document.querySelectorAll(".lang-btn");

  // Load language preference
  const savedLang = localStorage.getItem("preferred-lang");
  if (
    savedLang &&
    (savedLang === "es" || savedLang === "ca" || savedLang === "en")
  ) {
    currentLanguage = savedLang;
  } else {
    // Detect browser language
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === "ca" || browserLang === "en") {
      currentLanguage = browserLang;
    }
  }

  // Initialize translations
  setLanguage(currentLanguage);

  // Language Toggle Click Event
  langBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute("data-lang");
      setLanguage(targetLang);
    });
  });

  function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("preferred-lang", lang);

    // Check if translations dictionary exists
    if (typeof translations === "undefined") {
      console.error("El diccionario de traducciones no está disponible.");
      return;
    }

    const dict = translations[lang];
    if (!dict) return;

    // Translate text elements
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate input placeholders
    const placeholdersToTranslate = document.querySelectorAll(
      "[data-i18n-placeholder]",
    );
    placeholdersToTranslate.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // Update active class on selector buttons
    langBtns.forEach((btn) => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update HTML lang attribute for accessibility/SEO
    document.documentElement.setAttribute("lang", lang);
  }

  /* ==========================================================================
       6. CONTACT FORM VALIDATION & HANDLING
       ========================================================================== */
  const contactForm = document.getElementById("contact-form");
  const formSuccessAlert = document.getElementById("form-success");
  const btnSubmitForm = document.getElementById("btn-submit-form");

  const sendingTexts = {
    es: "Enviando consulta...",
    ca: "Enviant consulta...",
    en: "Sending inquiry...",
  };

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Honeypot spam/bot protection
      const honeypotWebsite = document.getElementById("form-website");
      if (honeypotWebsite && honeypotWebsite.value.trim() !== "") {
        console.warn("Bot detected and blocked via honeypot.");
        contactForm.reset();
        return;
      }

      // Form Fields
      const fieldName = document.getElementById("form-name");
      const fieldEmail = document.getElementById("form-email");
      const fieldPhone = document.getElementById("form-phone");
      const fieldMessage = document.getElementById("form-message");

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
      if (
        !fieldEmail.value.trim() ||
        !emailRegex.test(fieldEmail.value.trim())
      ) {
        showFieldError(fieldEmail, true);
        isFormValid = false;
      } else {
        showFieldError(fieldEmail, false);
      }

      // Phone validation (Spanish number format: 9 digits starting with 6, 7 or 9)
      const phoneRegex = /^[679]\d{8}$/;
      const sanitizedPhone = fieldPhone.value.replace(/\s+/g, "");
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
          message: fieldMessage.value.trim(),
        });
      }
    });
  }

  // Toggle field errors
  function showFieldError(inputElement, hasError) {
    const parent = inputElement.parentElement;
    if (hasError) {
      parent.classList.add("has-error");
    } else {
      parent.classList.remove("has-error");
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        btnSubmitForm.disabled = false;
        btnSubmitForm.innerHTML = originalBtnText;

        if (response.ok) {
          // Show localized success alert
          formSuccessAlert.classList.add("show");
          formElement.reset();

          // Auto hide success alert
          setTimeout(() => {
            formSuccessAlert.classList.remove("show");
          }, 8000);
        } else {
          alert(
            "Error al enviar el formulario. Por favor, inténtalo más tarde.",
          );
        }
      })
      .catch((error) => {
        btnSubmitForm.disabled = false;
        btnSubmitForm.innerHTML = originalBtnText;
        console.error("Error de Formspree:", error);
        alert("Hubo un problema de conexión. Por favor, inténtalo más tarde.");
      });
  }

  /* ==========================================================================
       7. HERO INTERACTIVE SPOTLIGHT & 3D TILT CARDS
       ========================================================================== */
  const hero = document.getElementById("hero");
  const cards = document.querySelectorAll(".tech-card");

  if (hero && cards.length > 0) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Spotlight positioning variable
      hero.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
      hero.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);

      // 3D Parallax Tilt coordinates relative to center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;

      cards.forEach((card) => {
        const depth = parseFloat(card.getAttribute("data-depth")) || 0.2;
        const moveX = deltaX * depth * 0.15;
        const moveY = deltaY * depth * 0.15;
        const rotateX = -deltaY * depth * 0.04;
        const rotateY = deltaX * depth * 0.04;

        card.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });

    // Reset transforms on cursor leave
    hero.addEventListener("mouseleave", () => {
      cards.forEach((card) => {
        card.style.transform =
          "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)";
      });
    });
  }

  /* ==========================================================================
       8. STICKY-SCROLL METHODOLOGY ANIMATIONS (GSAP & SCROLLTRIGGER)
       ========================================================================== */
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth <= 1024;

    if (!isMobile) {
      // Desktop Pinned / Sticky Scroll Timeline
      const stickySection = document.querySelector(".workflow-sticky-section");
      const stickyContainer = document.querySelector(
        ".workflow-sticky-container",
      );
      const textBlocks = document.querySelectorAll(".workflow-step-text-block");
      const imagePanes = document.querySelectorAll(".workflow-image-pane");
      const timelineNodes = document.querySelectorAll(".timeline-node");

      if (
        stickySection &&
        stickyContainer &&
        textBlocks.length > 0 &&
        imagePanes.length > 0
      ) {
        // Create timeline mapped to scroll percentage with built-in pinning
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stickySection,
            start: "top top",
            end: "bottom bottom",
            pin: ".workflow-sticky-container",
            scrub: 0.5,
          },
        });

        // Fill timeline center path line
        tl.to(
          ".timeline-progress-fill",
          {
            height: "100%",
            ease: "none",
          },
          0,
        );

        // Set initial states (Step 1 active)
        gsap.set(textBlocks[0], { opacity: 1, y: 0, pointerEvents: "all" });
        gsap.set(imagePanes[0], { opacity: 1, scale: 1 });
        timelineNodes[0].classList.add("active");

        // STEP 1 -> STEP 2 (transition at 15% - 25% scroll progress)
        tl.to(
          textBlocks[0],
          { opacity: 0, y: -40, pointerEvents: "none", duration: 0.2 },
          0.15,
        )
          .fromTo(
            textBlocks[1],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, pointerEvents: "all", duration: 0.2 },
            0.22,
          )

          .to(imagePanes[0], { opacity: 0, scale: 1.05, duration: 0.2 }, 0.15)
          .fromTo(
            imagePanes[1],
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1.0, duration: 0.2 },
            0.22,
          )

          .call(() => updateTimelineNodes(1), null, 0.22);

        // STEP 2 -> STEP 3 (transition at 45% - 55% scroll progress)
        tl.to(
          textBlocks[1],
          { opacity: 0, y: -40, pointerEvents: "none", duration: 0.2 },
          0.45,
        )
          .fromTo(
            textBlocks[2],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, pointerEvents: "all", duration: 0.2 },
            0.52,
          )

          .to(imagePanes[1], { opacity: 0, scale: 1.05, duration: 0.2 }, 0.45)
          .fromTo(
            imagePanes[2],
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1.0, duration: 0.2 },
            0.52,
          )

          .call(() => updateTimelineNodes(2), null, 0.52);

        // STEP 3 -> STEP 4 (transition at 75% - 85% scroll progress)
        tl.to(
          textBlocks[2],
          { opacity: 0, y: -40, pointerEvents: "none", duration: 0.2 },
          0.75,
        )
          .fromTo(
            textBlocks[3],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, pointerEvents: "all", duration: 0.2 },
            0.82,
          )

          .to(imagePanes[2], { opacity: 0, scale: 1.05, duration: 0.2 }, 0.75)
          .fromTo(
            imagePanes[3],
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1.0, duration: 0.2 },
            0.82,
          )

          .call(() => updateTimelineNodes(3), null, 0.82);

        function updateTimelineNodes(activeIndex) {
          timelineNodes.forEach((node, idx) => {
            if (idx <= activeIndex) {
              node.classList.add("active");
            } else {
              node.classList.remove("active");
            }
          });
        }
      }
    } else {
      // Mobile: Sticky visual viewport at top, text blocks reveal and trigger image change as they scroll
      const mobTextBlocks = document.querySelectorAll(
        ".workflow-step-text-block",
      );
      const imagePanes = document.querySelectorAll(".workflow-image-pane");

      if (mobTextBlocks.length > 0 && imagePanes.length > 0) {
        // Ensure initial visible state
        gsap.set(imagePanes[0], { opacity: 1, scale: 1 });

        mobTextBlocks.forEach((block, index) => {
          ScrollTrigger.create({
            trigger: block,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => activateMobileStep(index),
            onEnterBack: () => activateMobileStep(index),
          });
        });

        function activateMobileStep(index) {
          imagePanes.forEach((pane, idx) => {
            if (idx === index) {
              pane.classList.add("active");
            } else {
              pane.classList.remove("active");
            }
          });
        }
      }
    }
  }
});
