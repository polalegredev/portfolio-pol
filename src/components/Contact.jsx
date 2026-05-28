import { useState } from 'react';

export default function Contact({ lang, t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: '', // Honeypot field
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sendingTexts = {
    es: 'Enviando consulta...',
    ca: 'Enviant consulta...',
    en: 'Sending inquiry...',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()),
      phone: !formData.phone.replace(/\s+/g, '').trim() || !/^[679]\d{8}$/.test(formData.phone.replace(/\s+/g, '').trim()),
      message: !formData.message.trim() || formData.message.trim().length < 10,
    };

    setErrors(newErrors);

    // Form is valid if no field has errors
    return !Object.values(newErrors).some((hasError) => hasError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website.trim() !== '') {
      console.warn('Bot detected and blocked via honeypot.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        website: '',
      });
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.replace(/\s+/g, '').trim(),
      message: formData.message.trim(),
    };

    fetch('https://formspree.io/f/mqejgdne', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        setIsSubmitting(false);
        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            website: '',
          });
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 8000);
        } else {
          alert(
            lang === 'ca'
              ? "Error al enviar el formulari. Per favor, intenta-ho més tard."
              : lang === 'en'
              ? "Error sending form. Please try again later."
              : "Error al enviar el formulario. Por favor, inténtalo más tarde."
          );
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('Formspree connection error:', error);
        alert(
          lang === 'ca'
            ? "S'ha produït un problema de connexió. Per favor, intenta-ho més tard."
            : lang === 'en'
            ? "A connection error occurred. Please try again later."
            : "Hubo un problema de conexión. Por favor, inténtalo más tarde."
        );
      });
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="container contact-container">
        <div className="contact-info reveal active" id="contact-details-col">
          <span className="section-decor-tag">{t('contact-decor')}</span>
          <h2 className="section-title left-align">{t('contact-title')}</h2>
          <p className="contact-desc">{t('contact-desc')}</p>

          <div className="contact-methods">
            <a href="mailto:polalegre.dev@gmail.com" className="contact-method-item">
              <div className="method-icon">
                <svg
                  className="icon-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  width="20"
                  height="20"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="method-text">
                <span>{t('contact-method-email')}</span>
                <strong>polalegre.dev@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://wa.me/34640610268?text=Hola%20Pol,%20he%20visto%20tu%20portfolio%20y%20quiero%20consultarte%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-item"
            >
              <div className="method-icon">
                <svg
                  className="icon-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  width="20"
                  height="20"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div className="method-text">
                <span>{t('contact-method-wa')}</span>
                <strong>+34 640 61 02 68</strong>
              </div>
            </a>

            <div className="contact-method-item non-clickable">
              <div className="method-icon">
                <svg
                  className="icon-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  width="20"
                  height="20"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                </svg>
              </div>
              <div className="method-text">
                <span>{t('contact-method-zone')}</span>
                <strong>Badalona, Barcelona, Santa Coloma y Maresme</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper reveal active" id="contact-form-col">
          <form className="contact-form" id="contact-form" onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="form-name">{t('form-label-name')}</label>
              <input
                type="text"
                id="form-name"
                name="name"
                placeholder={t('form-placeholder-name')}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <span className="error-msg" id="error-name">
                {t('error-name')}
              </span>
            </div>

            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="form-email">{t('form-label-email')}</label>
              <input
                type="email"
                id="form-email"
                name="email"
                placeholder={t('form-placeholder-email')}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <span className="error-msg" id="error-email">
                {t('error-email')}
              </span>
            </div>

            <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
              <label htmlFor="form-phone">{t('form-label-phone')}</label>
              <input
                type="tel"
                id="form-phone"
                name="phone"
                placeholder={t('form-placeholder-phone')}
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <span className="error-msg" id="error-phone">
                {t('error-phone')}
              </span>
            </div>

            <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="form-message">{t('form-label-msg')}</label>
              <textarea
                id="form-message"
                name="message"
                rows="5"
                placeholder={t('form-placeholder-msg')}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <span className="error-msg" id="error-message">
                {t('error-message')}
              </span>
            </div>

            {/* Honeypot spam protection hidden field */}
            <div className="form-group" style={{ display: 'none !important' }}>
              <label htmlFor="form-website">Website (dejar en blanco)</label>
              <input
                type="text"
                id="form-website"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-full btn-glow"
              id="btn-submit-form"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  {sendingTexts[lang]} <span className="spinner"></span>
                </>
              ) : (
                t('form-btn-submit')
              )}
            </button>

            <div className={`form-success-alert ${submitSuccess ? 'show' : ''}`} id="form-success">
              <svg
                className="icon-success"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                width="24"
                height="24"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="alert-content">
                <strong>{t('success-title')}</strong>
                <p>{t('success-desc')}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
