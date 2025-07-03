import React, { useEffect } from 'react';
import { CasinoNews } from '../../types';
import { formatDate } from '../../utils/filters';

interface NewsModalProps {
  news: CasinoNews;
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ news, onClose }) => {
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
        
        <h2>{news.title}</h2>
        <p className="date">
          <strong>Published:</strong> {formatDate(news.date)}
        </p>
        
        <div className="tags">
          {news.tags.map(tag => (
            <span key={tag} className="news-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <p>{news.fullContent}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
