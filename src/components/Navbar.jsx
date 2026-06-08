import { useState, useEffect } from "react";

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <a
          href="#hero"
          className="nav-logo"
          id="nav-logo"
          onClick={handleLinkClick}
        >
          <div className="logo-premium" style={{ fontSize: "1.4rem" }}>
            <span className="turquesa-neon">P</span>
            <span className="blanco-neon">ol</span>
            <span className="turquesa-neon">A</span>
            <span className="blanco-neon">legre</span>
            <span className="turquesa-neon">.</span>
            <span className="blanco-neon">dev</span>
          </div>
        </a>

        <nav
          className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}
          id="nav-menu"
        >
          <a
            href="#servicios"
            className="nav-link"
            id="link-servicios"
            onClick={handleLinkClick}
          >
            {t("nav-servicios")}
          </a>
          <a
            href="#como-trabajamos"
            className="nav-link"
            id="link-metodo"
            onClick={handleLinkClick}
          >
            {t("nav-metodo")}
          </a>
          <a
            href="#sobre-mi"
            className="nav-link"
            id="link-sobre-mi"
            onClick={handleLinkClick}
          >
            {t("nav-sobre-mi")}
          </a>
          <a
            href="#portafolio"
            className="nav-link"
            id="link-portafolio"
            onClick={handleLinkClick}
          >
            {t("nav-portafolio")}
          </a>

          <a
            href="#contacto"
            className="btn btn-secondary nav-btn"
            id="btn-nav-contacto"
            onClick={handleLinkClick}
          >
            {t("nav-contacto")}
          </a>

          {/* Language Selector */}
          <div className="lang-selector">
            <button
              className={`lang-btn ${lang === "es" ? "active" : ""}`}
              onClick={() => {
                setLang("es");
                handleLinkClick();
              }}
            >
              ES
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${lang === "ca" ? "active" : ""}`}
              onClick={() => {
                setLang("ca");
                handleLinkClick();
              }}
            >
              CA
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => {
                setLang("en");
                handleLinkClick();
              }}
            >
              EN
            </button>
          </div>
        </nav>

        <button
          className={`nav-toggle ${mobileMenuOpen ? "active" : ""}`}
          id="nav-toggle"
          aria-label="Abrir menú"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
