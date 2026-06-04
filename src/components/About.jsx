import { MapPin, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

export default function About({ t }) {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="about-section" id="sobre-mi">
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-decor-tag">{t('about-decor')}</span>
          <h2 className="section-title">{t('about-title')}</h2>
        </div>

        <div className="bento-grid reveal active">
          {/* Box 1: Profile photo wrapper */}
          <div 
            className="bento-box bento-profile spotlight-card"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow-layer"></div>
            <div className="card-inner">
              <div className="editor-header">
                <span className="editor-title">pol_alegre_avatar.png</span>
              </div>
              <img
                src={`${import.meta.env.BASE_URL}assets/pol-alegre.png`}
                alt="Pol Alegre Martinez"
                className="about-profile-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Box 2: Main Copy */}
          <div 
            className="bento-box bento-text spotlight-card"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow-layer"></div>
            <div className="card-inner">
              <h3>{t('about-lead')}</h3>
              <p>{t('about-body-1')}</p>
              <p>{t('about-body-2')}</p>
            </div>
          </div>

          {/* Box 3: Value 1 */}
          <div 
            className="bento-box bento-value bento-value-1 spotlight-card"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow-layer"></div>
            <div className="card-inner">
              <div className="bento-val-header">
                <div className="bento-val-icon-wrapper val-color-blue">
                  <MapPin size={18} />
                </div>
                <h4>{t('about-val-title-1')}</h4>
              </div>
              <p>{t('about-val-desc-1')}</p>
            </div>
          </div>

          {/* Box 4: Value 2 */}
          <div 
            className="bento-box bento-value bento-value-2 spotlight-card"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow-layer"></div>
            <div className="card-inner">
              <div className="bento-val-header">
                <div className="bento-val-icon-wrapper val-color-cyan">
                  <Cpu size={18} />
                </div>
                <h4>{t('about-val-title-2')}</h4>
              </div>
              <p>{t('about-val-desc-2')}</p>
            </div>
          </div>

          {/* Box 5: Value 3 */}
          <div 
            className="bento-box bento-value bento-value-3 spotlight-card"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow-layer"></div>
            <div className="card-inner">
              <div className="bento-val-header">
                <div className="bento-val-icon-wrapper val-color-green">
                  <ShieldCheck size={18} />
                </div>
                <h4>{t('about-val-title-3')}</h4>
              </div>
              <p>{t('about-val-desc-3')}</p>
            </div>
          </div>

          {/* Box 6: Skills & Tech stack (New!) */}
          <div 
            className="bento-box bento-value bento-skills spotlight-card"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow-layer"></div>
            <div className="card-inner">
              <div className="bento-val-header">
                <div className="bento-val-icon-wrapper val-color-purple">
                  <Sparkles size={18} />
                </div>
                <h4>{t('about-skills-title')}</h4>
              </div>
              <div className="skills-badge-container">
                <span className="skill-badge">React</span>
                <span className="skill-badge">Vite</span>
                <span className="skill-badge">Framer Motion</span>
                <span className="skill-badge">ES6+ JS</span>
                <span className="skill-badge">Vanilla CSS</span>
                <span className="skill-badge">Git</span>
                <span className="skill-badge">SEO Local</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
