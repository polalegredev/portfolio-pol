import { MapPin, Mail } from 'lucide-react';

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.png`}
              alt="Logo Pol Alegre"
              className="logo-icon"
              style={{ borderRadius: '4px' }}
            />
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
