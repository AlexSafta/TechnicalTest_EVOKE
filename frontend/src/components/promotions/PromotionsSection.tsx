import React, { useState } from 'react';
import { Promotion } from '../../types';
import PromotionCard from './PromotionCard';
import PromotionModal from './PromotionModal';

interface PromotionsSectionProps {
  promotions: Promotion[];
}

const PromotionsSection: React.FC<PromotionsSectionProps> = ({ promotions }) => {
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);

  const handleReadMore = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
  };

  const handleCloseModal = () => {
    setSelectedPromotion(null);
  };

  return (
    <div className="promotions-section">
      <div className="container">
        <div className="promotions-grid">
          {promotions.map(promotion => (
            <PromotionCard
              key={promotion.id}
              promotion={promotion}
              onReadMore={() => handleReadMore(promotion)}
            />
          ))}
        </div>
      </div>

      {selectedPromotion && (
        <PromotionModal
          promotion={selectedPromotion}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PromotionsSection;
