import { User, Award, ShieldCheck } from 'lucide-react';

export default function WhyChooseMe({ t }) {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="why-section" id="por-que-elegirme">
      <div className="container">
        <div className="why-grid">
          <div className="why-content-side reveal active">
            <span className="section-decor-tag">{t('nav-sobre-mi')}</span>
            <h2 className="section-title why-section-title">{t('why-title')}</h2>
            <div className="why-paragraphs">
              <p className="why-p">{t('why-body-1')}</p>
              <p className="why-p">{t('why-body-2')}</p>
            </div>
            <a href="#contacto" className="btn btn-primary btn-glow why-cta">
              {t('btn-hero-contacto')}
            </a>
          </div>

          <div className="why-cards-side reveal active">
            <div 
              className="why-feature-card spotlight-card" 
              onMouseMove={handleCardMouseMove}
            >
              <div className="card-glow-layer"></div>
              <div className="card-inner">
                <div className="why-feature-icon-wrapper">
                  <User size={20} className="why-feature-icon" />
                </div>
                <div className="why-feature-text">
                  <h4>{t('about-val-title-1')}</h4>
                  <p>{t('about-val-desc-1')}</p>
                </div>
              </div>
            </div>

            <div 
              className="why-feature-card spotlight-card" 
              onMouseMove={handleCardMouseMove}
            >
              <div className="card-glow-layer"></div>
              <div className="card-inner">
                <div className="why-feature-icon-wrapper">
                  <Award size={20} className="why-feature-icon" />
                </div>
                <div className="why-feature-text">
                  <h4>{t('about-val-title-2')}</h4>
                  <p>{t('about-val-desc-2')}</p>
                </div>
              </div>
            </div>

            <div 
              className="why-feature-card spotlight-card" 
              onMouseMove={handleCardMouseMove}
            >
              <div className="card-glow-layer"></div>
              <div className="card-inner">
                <div className="why-feature-icon-wrapper">
                  <ShieldCheck size={20} className="why-feature-icon" />
                </div>
                <div className="why-feature-text">
                  <h4>{t('about-val-title-3')}</h4>
                  <p>{t('about-val-desc-3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
