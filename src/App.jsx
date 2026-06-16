import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import About from "./components/About";
import Projects from "./components/Projects";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import PrivacyModal from "./components/PrivacyModal";
import { translations } from "./translations";

function App() {
  const [lang, setLang] = useState("es");
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Detect and set initial language preference
  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-lang");
    if (savedLang && ["es", "ca", "en"].includes(savedLang)) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (["ca", "en"].includes(browserLang)) {
        setLang(browserLang);
      }
    }
  }, []);

  // Update HTML lang attribute and local storage whenever language changes
  useEffect(() => {
    localStorage.setItem("preferred-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  // Dynamic text translation helper
  const t = (key) => {
    return translations[lang]?.[key] || key;
  };

  // Scroll reveal animation logic
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleReveal);
    handleReveal(); // Trigger initially

    return () => window.removeEventListener("scroll", handleReveal);
  }, []);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <Services t={t} />
        <Workflow t={t} />
        <Faq t={t} />
        <Contact lang={lang} t={t} />
      </main>
      <Footer t={t} openPrivacyPolicy={() => setIsPrivacyModalOpen(true)} />
      <CookieConsent
        t={t}
        openPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
      />
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        t={t}
      />
    </>
  );
}

export default App;
