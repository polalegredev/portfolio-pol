import { useState, useEffect } from 'react';

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo" id="nav-logo" onClick={handleLinkClick}>
          <svg
            className="logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              d="M 7, 18 V 6 H 11.5 C 13.8 6, 13.8 11.5, 11.5 11.5 H 7"
              stroke="url(#logo-grad)"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M 11, 11.5 L 14.5, 6 L 18, 18"
              stroke="url(#logo-grad)"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M 9.5, 14 H 15.5"
              stroke="url(#logo-grad)"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <defs>
              <linearGradient
                id="logo-grad"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="var(--accent-blue)"></stop>
                <stop offset="100%" stopColor="var(--accent-clay)"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">Pol Alegre</span>
        </a>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          <a
            href="#servicios"
            className="nav-link"
            id="link-servicios"
            onClick={handleLinkClick}
          >
            {t('nav-servicios')}
          </a>
          <a
            href="#como-trabajamos"
            className="nav-link"
            id="link-metodo"
            onClick={handleLinkClick}
          >
            {t('nav-metodo')}
          </a>
          <a
            href="#sobre-mi"
            className="nav-link"
            id="link-sobre-mi"
            onClick={handleLinkClick}
          >
            {t('nav-sobre-mi')}
          </a>
          <a
            href="#portafolio"
            className="nav-link"
            id="link-portafolio"
            onClick={handleLinkClick}
          >
            {t('nav-portafolio')}
          </a>

          <a
            href="#contacto"
            className="btn btn-secondary nav-btn"
            id="btn-nav-contacto"
            onClick={handleLinkClick}
          >
            {t('nav-contacto')}
          </a>

          {/* Language Selector */}
          <div className="lang-selector">
            <button 
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`} 
              onClick={() => { setLang('es'); handleLinkClick(); }}
            >
              ES
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={`lang-btn ${lang === 'ca' ? 'active' : ''}`} 
              onClick={() => { setLang('ca'); handleLinkClick(); }}
            >
              CA
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
              onClick={() => { setLang('en'); handleLinkClick(); }}
            >
              EN
            </button>
          </div>
        </nav>

        <button 
          className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`} 
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
