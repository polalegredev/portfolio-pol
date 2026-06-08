import { useState, useEffect } from "react";

const CookieConsent = ({ t, openPrivacyPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay slighty to not flash on load and for a smoother experience
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) {
        setIsVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <p style={{ display: "inline" }}>{t("cookie-text")} </p>
          <button
            onClick={openPrivacyPolicy}
            style={{
              background: "none",
              border: "none",
              color: "var(--accent-blue)",
              cursor: "pointer",
              fontSize: "0.9rem",
              padding: 0,
              textDecoration: "underline",
            }}
          >
            {t("privacy-link")}
          </button>
        </div>
        <div className="cookie-actions">
          <button
            onClick={handleReject}
            className="btn btn-outline cookie-btn-reject"
          >
            {t("cookie-reject")}
          </button>
          <button
            onClick={handleAccept}
            className="btn btn-primary cookie-btn-accept"
          >
            {t("cookie-accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
