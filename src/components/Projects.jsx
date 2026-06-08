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

        <div className="portfolio-grid">
          {/* Project 1 */}
          <div className="project-card reveal active" id="proj-restaurant">
            <div className="project-img-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}assets/project-restaurant.png`}
                alt="Mockup El Racó Badalona"
                className="project-img"
                loading="lazy"
                decoding="async"
              />
              <div className="project-tags">
                <span className="project-tag">{t("proj-tag-corp")}</span>
                <span className="project-tag">{t("proj-tag-rest")}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{t("proj-title-1")}</h3>
              <p>{t("proj-desc-1")}</p>
              <a href="#contacto" className="project-link" id="link-proj-1">
                {t("proj-link-1")}
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card reveal active" id="proj-physio">
            <div className="project-img-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}assets/project-physio.png`}
                alt="Mockup Fisioterapia Bufalà"
                className="project-img"
                loading="lazy"
                decoding="async"
              />
              <div className="project-tags">
                <span className="project-tag">{t("proj-tag-corp")}</span>
                <span className="project-tag">{t("proj-tag-health")}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{t("proj-title-2")}</h3>
              <p>{t("proj-desc-2")}</p>
              <a href="#contacto" className="project-link" id="link-proj-2">
                {t("proj-link-2")}
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card reveal active" id="proj-shop">
            <div className="project-img-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}assets/project-shop.png`}
                alt="Mockup BadaModa Concept"
                className="project-img"
                loading="lazy"
                decoding="async"
              />
              <div className="project-tags">
                <span className="project-tag">{t("proj-tag-landing")}</span>
                <span className="project-tag">{t("proj-tag-shop")}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{t("proj-title-3")}</h3>
              <p>{t("proj-desc-3")}</p>
              <a href="#contacto" className="project-link" id="link-proj-3">
                {t("proj-link-3")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
