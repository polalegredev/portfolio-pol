export default function Projects({ t }) {
  return (
    <section className="portfolio-section" id="portafolio">
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-decor-tag">{t("portfolio-decor")}</span>
          <h2 className="section-title" id="portfolio-title">
            {t("portfolio-title")}
          </h2>
          <p className="section-subtitle">{t("portfolio-subtitle")}</p>
        </div>

        <div className="portfolio-grid" style={{ gridTemplateColumns: '1fr' }}>
          {/* EcoPool Project */}
          <a href="https://ecopoollux.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="project-card reveal active" id="proj-ecopool" style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div className="project-img-wrapper" style={{ height: '500px' }}>
              {/* Aquí puedes poner la imagen de la web EcoPool */}
              <img
                src={`${import.meta.env.BASE_URL}assets/ecopool.png`}
                alt="EcoPool Web"
                className="project-img"
                loading="lazy"
                decoding="async"
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
              <div className="project-tags">
                <span className="project-tag">EcoPool</span>
                <span className="project-tag">Web Design</span>
              </div>
            </div>
            <div className="project-info">
              <h3>EcoPool</h3>
              <p>Proyecto web completo para EcoPool. Diseño moderno, dinámico y sostenible.</p>
              <span className="project-link" id="link-proj-ecopool">
                Ver la web de EcoPool
              </span>
            </div>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}
