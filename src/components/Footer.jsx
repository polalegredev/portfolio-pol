import { MapPin, Mail } from 'lucide-react';

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            <svg
              className="logo-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="rgba(255,255,255,0.15)"
              ></circle>
              <path
                d="M8.5 16V8h3.5a2.5 2.5 0 0 1 0 5H8.5M12 13l3.5 3"
                stroke="url(#logo-grad-footer)"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10 14.5h4"
                stroke="url(#logo-grad-footer)"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="logo-grad-footer"
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
          <p className="footer-tagline">{t('footer-tagline')}</p>
        </div>

        <div className="footer-links">
          <h4>{t('footer-links-title')}</h4>
          <a href="#servicios">{t('nav-servicios')}</a>
          <a href="#como-trabajamos">{t('nav-metodo')}</a>
          <a href="#sobre-mi">{t('nav-sobre-mi')}</a>
          <a href="#portafolio">{t('nav-portafolio')}</a>
        </div>

        <div className="footer-contact">
          <h4>{t('footer-contact-title')}</h4>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={14} style={{ color: 'var(--accent-blue)' }} /> Badalona, Barcelona
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
            <Mail size={14} style={{ color: 'var(--accent-blue)' }} />
            <a href="mailto:polalegre.dev@gmail.com">polalegre.dev@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p dangerouslySetInnerHTML={{ __html: t('footer-rights') }}></p>
          <p>{t('footer-made-by')}</p>
        </div>
      </div>
    </footer>
  );
}
