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

          {/* Card 3: E-commerce */}
          <div
            className="service-card spotlight-card reveal active"
            id="card-ecommerce"
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
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
              </div>

              <h3 className="service-title-text">
                {t("service-title-ecommerce")}
              </h3>

              <div className="service-price-block">
                <span className="price-label">
                  {t("service-price-ecommerce-label")}
                </span>
                <span className="price-value">
                  {t("service-price-ecommerce-value")}
                </span>
              </div>

              <p className="service-desc-text">{t("service-desc-ecommerce")}</p>

              <div className="service-divider"></div>

              <ul className="service-bullets">
                {Array.isArray(t("service-bullets-ecommerce")) &&
                  t("service-bullets-ecommerce").map((bullet, idx) => (
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
                {t("service-ideal-ecommerce")}
              </div>

              <a
                href="https://wa.me/34640610268?text=%C2%A1Hola%20Pol!%20He%20visto%20tu%20web%20y%20estoy%20interesado%20en%20el%20plan%20Tienda%20Online%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline service-cta-btn btn-wa-contrast"
                id="link-service-ecommerce"
              >
                {t("service-link-ecommerce")}
              </a>
            </div>
          </div>

          {/* Card 4: Maintenance */}
          <div
            className="service-card spotlight-card reveal active"
            id="card-maintenance"
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
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
              </div>

              <h3 className="service-title-text">
                {t("service-title-maintenance")}
              </h3>

              <div className="service-price-block">
                <span className="price-label">
                  {t("service-price-maintenance-label")}
                </span>
                <span className="price-value">
                  {t("service-price-maintenance-value")}
                </span>
              </div>

              <p className="service-desc-text">{t("service-desc-maintenance")}</p>

              <div className="service-divider"></div>

              <ul className="service-bullets">
                {Array.isArray(t("service-bullets-maintenance")) &&
                  t("service-bullets-maintenance").map((bullet, idx) => (
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
                {t("service-ideal-maintenance")}
              </div>

              <a
                href="https://wa.me/34640610268?text=%C2%A1Hola%20Pol!%20He%20visto%20tu%20web%20y%20estoy%20interesado%20en%20el%20plan%20Mantenimiento%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline service-cta-btn btn-wa-contrast"
                id="link-service-maintenance"
              >
                {t("service-link-maintenance")}
              </a>
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
