import { CheckCircle2 } from 'lucide-react';

export default function TargetAudience({ t }) {
  const targets = t('target-items') || [];

  return (
    <section className="target-section" id="sectores">
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-decor-tag">{t('nav-servicios')}</span>
          <h2 className="section-title">{t('target-title')}</h2>
          <p className="section-subtitle">{t('target-subtitle')}</p>
        </div>

        <div className="target-grid reveal active">
          {Array.isArray(targets) && targets.map((item, index) => (
            <div key={index} className="target-item-card">
              <CheckCircle2 size={16} className="target-item-icon" />
              <span className="target-item-text">{item}</span>
            </div>
          ))}
        </div>

        <div className="target-conclusion reveal active">
          <p>{t('target-conclusion')}</p>
        </div>
      </div>
    </section>
  );
}
