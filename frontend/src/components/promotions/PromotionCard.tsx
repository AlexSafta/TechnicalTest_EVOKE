import React from 'react';
import { Promotion } from '../../types';
import { formatDate, isPromotionExpired } from '../../utils/filters';

interface PromotionCardProps {
  promotion: Promotion;
  onReadMore: () => void;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion, onReadMore }) => {
  const expired = isPromotionExpired(promotion.expiryDate);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/600x300?text=Promotion+Image';
  };

  return (
    <div className={`promotion-card ${expired ? 'expired' : ''}`}>
      <img
        src={promotion.imageUrl}
        alt={promotion.title}
        onError={handleImageError}
      />
      
      <div className="promotion-card-content">
        <h3>{promotion.title}</h3>
        <p className="snippet">{promotion.snippet}</p>
        
        <p className="expiry">
          {expired ? (
            <span style={{ color: '#ff4444' }}>Expired: {formatDate(promotion.expiryDate)}</span>
          ) : (
            <span>Expires: {formatDate(promotion.expiryDate)}</span>
          )}
        </p>
        
        <button 
          className="read-more-btn"
          onClick={onReadMore}
          disabled={expired}
        >
          {expired ? 'Expired' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;
