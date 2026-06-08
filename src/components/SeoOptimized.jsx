import { Gauge, Search } from "lucide-react";

export default function SeoOptimized({ t }) {
  const bullets = t("seo-bullets") || [];

  return (
    <section className="seo-section" id="seo">
      <div className="container">
        <div className="seo-grid">
          <div className="seo-text-side reveal active">
            <span className="section-decor-tag">SEO Local & Técnico</span>
            <h2 className="section-title seo-section-title">
              {t("seo-title")}
            </h2>
            <p className="seo-subtitle-text">{t("seo-subtitle")}</p>

            <ul className="seo-bullets-list">
              {Array.isArray(bullets) &&
                bullets.map((bullet, index) => (
                  <li key={index} className="seo-bullet-item">
                    <span className="seo-bullet-dot"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="seo-visual-side reveal active">
            <div className="seo-preview-card spotlight-card">
              <div className="card-glow-layer"></div>
              <div className="card-inner">
                {/* Search Engine Mockup */}
                <div className="seo-mock-browser">
                  <div className="browser-dots">
                    <span className="browser-dot red"></span>
                    <span className="browser-dot yellow"></span>
                    <span className="browser-dot green"></span>
                  </div>
                  <div className="browser-search-bar">
                    <Search size={12} className="browser-search-icon" />
                    <span>google.es/search?q=disenador+web+badalona</span>
                  </div>
                </div>

                <div className="seo-mock-results">
                  <div className="seo-result-item">
                    <div className="seo-result-url">
                      https://polalegre.dev › badalona
                    </div>
                    <h4 className="seo-result-title">
                      Diseñador Web en Badalona | Pol Alegre Freelance
                    </h4>
                    <p className="seo-result-snippet">
                      ¿Buscas una web rápida, profesional y preparada para
                      conseguir clientes? Diseño páginas a medida en Badalona y
                      cercanías. ¡Llama ahora!
                    </p>
                    <div className="seo-result-rating">
                      ★★★★★ <span className="rating-val">4.9 (42 reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Core Web Vitals Badge */}
                <div className="seo-vitals-badge">
                  <div className="vitals-score-circle">
                    <Gauge size={24} className="score-icon" />
                    <span className="score-text">100</span>
                  </div>
                  <div className="vitals-info">
                    <h5>Core Web Vitals</h5>
                    <p>Passed (Excellent performance)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
