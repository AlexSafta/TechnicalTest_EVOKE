import React, { useEffect } from 'react';
import { Promotion } from '../../types';
import { formatDate } from '../../utils/filters';

interface PromotionModalProps {
  promotion: Promotion;
  onClose: () => void;
}

const PromotionModal: React.FC<PromotionModalProps> = ({ promotion, onClose }) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Handle click outside modal
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <h2>{promotion.title}</h2>
        <p className="expiry">
          <strong>Expires:</strong> {formatDate(promotion.expiryDate)}
        </p>
        
        <div>
          <h3>Full Terms & Conditions</h3>
          <p>{promotion.fullTerms}</p>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
