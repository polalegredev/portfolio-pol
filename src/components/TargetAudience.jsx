export default function TargetAudience({ t }) {
  const targets = t('target-items') || [];

  const getSectorIcon = (index) => {
    const props = {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "target-item-icon"
    };

    switch (index) {
      case 0: // Autónomos / Freelancers
        return (
          <svg {...props}>
            <rect x="2" y="16" width="20" height="4" rx="1" />
            <path d="M6 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
            <circle cx="12" cy="7" r="2" />
          </svg>
        );
      case 1: // Comercios / Shops
        return (
          <svg {...props}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 2: // Restaurantes
        return (
          <svg {...props}>
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v4M12 15v7M17 2v13a2 2 0 0 0 2 2h2V2M19 17v5" />
          </svg>
        );
      case 3: // Clínicas
        return (
          <svg {...props}>
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case 4: // Psicólogos
        return (
          <svg {...props}>
            <path d="M12 2v20M5 8c0 4.5 3.5 8 7 8s7-3.5 7-8" />
          </svg>
        );
      case 5: // Fisioterapeutas
        return (
          <svg {...props}>
            <path d="M12 2v20M17 5H7M15 9H9M19 13H5M17 17H7" />
          </svg>
        );
      case 6: // Gestorías
        return (
          <svg {...props}>
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="16" y2="14" />
            <line x1="8" y1="18" x2="16" y2="18" />
          </svg>
        );
      case 7: // Abogados
        return (
          <svg {...props}>
            <path d="M12 2v20M5 7h14M5 7L3 13h4L5 7zm14 0l-2 6h4l-2-6z" />
          </svg>
        );
      case 8: // Arquitectos
        return (
          <svg {...props}>
            <path d="M5 19L19 5M12 4h8v8M4 12v8h8" />
          </svg>
        );
      case 9: // Reformas
        return (
          <svg {...props}>
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
          </svg>
        );
      case 10: // Electricistas
        return (
          <svg {...props}>
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
      case 11: // Empresas de servicios
      default:
        return (
          <svg {...props}>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
    }
  };

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
              <div className="target-item-icon-container">
                {getSectorIcon(index)}
              </div>
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
