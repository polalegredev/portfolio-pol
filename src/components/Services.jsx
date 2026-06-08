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
                href="#contacto"
                className="btn btn-outline service-cta-btn"
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
                href="#contacto"
                className="btn btn-primary btn-glow service-cta-btn"
                id="link-service-corporate"
              >
                {t("service-link-corporate")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
