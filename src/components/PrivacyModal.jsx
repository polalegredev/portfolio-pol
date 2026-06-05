import React from 'react';
import { X } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose, t }) {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content spotlight-card" onClick={(e) => e.stopPropagation()}>
                <div className="card-inner">
                    <div className="modal-header">
                        <h3 className="section-title" style={{ fontSize: '1.8rem', marginTop: 0 }}>{t('privacy-title')}</h3>
                        <button className="modal-close-btn btn-secondary" onClick={onClose}>
                            <X size={20} />
                        </button>
                    </div>
                    <div className="modal-body">
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            {t('privacy-content')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
