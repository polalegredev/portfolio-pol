export default function Services({ t }) {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="services-section" id="servicios">
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-decor-tag">{t("services-decor")}</span>
          <h2 className="section-title" id="services-title">
            {t("services-title")}
          </h2>
          <p className="section-subtitle">{t("services-subtitle")}</p>
        </div>

        <div className="services-grid">
          {/* Card 1: Landing Page */}
          <div
            className="service-card spotlight-card reveal active"
            id="card-landing"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow-layer"></div>
            <div className="card-inner">
              <div className="service-header">
                <div className="service-icon-wrapper">
                  <svg
                    className="icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    width="24"
                    height="24"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>

              <h3 className="service-title-text">
                {t("service-title-landing")}
              </h3>

              <div className="service-price-block">
                <span className="price-label">
                  {t("service-price-landing-label")}
                </span>
                <span className="price-value">
                  {t("service-price-landing-value")}
                </span>
              </div>

              <p className="service-desc-text">{t("service-desc-landing")}</p>

              <div className="service-divider"></div>

              <ul className="service-bullets">
                {Array.isArray(t("service-bullets-landing")) &&
                  t("service-bullets-landing").map((bullet, idx) => (
                    <li key={idx}>
                      <svg
                        className="icon-check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        width="14"
                        height="14"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {bullet}
                    </li>
                  ))}
              </ul>

              <div className="service-ideal-badge">
                {t("service-ideal-landing")}
              </div>

              <a
                href="https://wa.me/34640610268?text=%C2%A1Hola%20Pol!%20He%20visto%20tu%20web%20y%20estoy%20interesado%20en%20el%20plan%20Web%20Esencial%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline service-cta-btn btn-wa-contrast"
                id="link-service-landing"
              >
                {t("service-link-landing")}
              </a>
            </div>
          </div>

          {/* Card 2: Corporate (Featured) */}
          <div
            className="service-card spotlight-card service-featured reveal active"
            id="card-corporate"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow-layer"></div>
            <div className="card-inner">
              <div className="service-header">
                <div className="service-icon-wrapper">
                  <svg
                    className="icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <span className="service-popular-badge">Recomendado</span>
              </div>

              <h3 className="service-title-text">
                {t("service-title-corporate")}
              </h3>

              <div className="service-price-block">
                <span className="price-label">
                  {t("service-price-corporate-label")}
                </span>
                <span className="price-value">
                  {t("service-price-corporate-value")}
                </span>
              </div>

              <p className="service-desc-text">{t("service-desc-corporate")}</p>

              <div className="service-divider"></div>

              <ul className="service-bullets">
                {Array.isArray(t("service-bullets-corporate")) &&
                  t("service-bullets-corporate").map((bullet, idx) => (
                    <li key={idx}>
                      <svg
                        className="icon-check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        width="14"
                        height="14"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {bullet}
                    </li>
                  ))}
              </ul>

              <div className="service-ideal-badge">
                {t("service-ideal-corporate")}
              </div>

              <a
                href="https://wa.me/34640610268?text=%C2%A1Hola%20Pol!%20He%20visto%20tu%20web%20y%20estoy%20interesado%20en%20el%20plan%20Web%20Integral%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-glow service-cta-btn btn-wa-contrast"
                id="link-service-corporate"
              >
                {t("service-link-corporate")}
              </a>
            </div>
          </div>

        </div>

        <div className="addons-section reveal active" style={{ marginTop: '80px' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h3 className="section-title" style={{ fontSize: '2.2rem' }}>{t("addons-title")}</h3>
            <p className="section-subtitle">{t("addons-subtitle")}</p>
          </div>
          
          <div className="addons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {/* Maintenance */}
            <div className="addon-card spotlight-card" onMouseMove={handleCardMouseMove} style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
              <div className="card-glow-layer"></div>
              <div className="card-inner" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h4 style={{ color: 'var(--accent-blue)', fontSize: '1.15rem', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>{t("addon-maintenance-title")}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', flexGrow: 1, lineHeight: '1.6', margin: 0 }}>{t("addon-maintenance-desc")}</p>
                <div style={{ fontWeight: '700', fontSize: '1.25rem', marginTop: '20px', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{t("addon-maintenance-price")}</div>
              </div>
            </div>

            {/* Extra Pages */}
            <div className="addon-card spotlight-card" onMouseMove={handleCardMouseMove} style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
              <div className="card-glow-layer"></div>
              <div className="card-inner" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h4 style={{ color: 'var(--accent-clay)', fontSize: '1.15rem', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>{t("addon-pages-title")}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', flexGrow: 1, lineHeight: '1.6', margin: 0 }}>{t("addon-pages-desc")}</p>
                <div style={{ fontWeight: '700', fontSize: '1.25rem', marginTop: '20px', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{t("addon-pages-price")}</div>
              </div>
            </div>

            {/* Advanced SEO */}
            <div className="addon-card spotlight-card" onMouseMove={handleCardMouseMove} style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
              <div className="card-glow-layer"></div>
              <div className="card-inner" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h4 style={{ color: 'var(--accent-pink)', fontSize: '1.15rem', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>{t("addon-seo-title")}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', flexGrow: 1, lineHeight: '1.6', margin: 0 }}>{t("addon-seo-desc")}</p>
                <div style={{ fontWeight: '700', fontSize: '1.25rem', marginTop: '20px', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{t("addon-seo-price")}</div>
              </div>
            </div>

            {/* Extra Language */}
            <div className="addon-card spotlight-card" onMouseMove={handleCardMouseMove} style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
              <div className="card-glow-layer"></div>
              <div className="card-inner" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h4 style={{ color: '#10b981', fontSize: '1.15rem', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>{t("addon-lang-title")}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', flexGrow: 1, lineHeight: '1.6', margin: 0 }}>{t("addon-lang-desc")}</p>
                <div style={{ fontWeight: '700', fontSize: '1.25rem', marginTop: '20px', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{t("addon-lang-price")}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-disclaimer reveal active">
          <p>{t("services-disclaimer")}</p>
        </div>
      </div>
    </section>
  );
}
