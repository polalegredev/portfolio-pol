import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq({ t }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: t('faq-q1'), a: t('faq-a1') },
    { q: t('faq-q2'), a: t('faq-a2') },
    { q: t('faq-q3'), a: t('faq-a3') },
    { q: t('faq-q4'), a: t('faq-a4') },
    { q: t('faq-q5'), a: t('faq-a5') },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-decor-tag">FAQ</span>
          <h2 className="section-title">{t('faq-title')}</h2>
        </div>

        <div className="faq-list reveal active">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item spotlight-card ${isOpen ? 'faq-item-open' : ''}`}
                onMouseMove={handleCardMouseMove}
              >
                <div className="card-glow-layer"></div>
                <div className="card-inner">
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-question-title">
                      <HelpCircle size={18} className="faq-icon-help" />
                      <span>{faq.q}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <ChevronDown size={18} className="faq-icon-chevron" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="faq-answer-wrapper"
                      >
                        <div className="faq-answer-content">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
