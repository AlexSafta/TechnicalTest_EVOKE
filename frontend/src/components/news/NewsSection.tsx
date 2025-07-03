import React, { useState } from 'react';
import { CasinoNews } from '../../types';
import NewsCard from './NewsCard';
import NewsModal from './NewsModal';

interface NewsSectionProps {
  news: CasinoNews[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const [selectedNews, setSelectedNews] = useState<CasinoNews | null>(null);

  const handleReadArticle = (newsItem: CasinoNews) => {
    setSelectedNews(newsItem);
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="news-section">
      <div className="container">
        <div className="news-grid">
          {news.map(newsItem => (
            <NewsCard
              key={newsItem.id}
              news={newsItem}
              onReadArticle={() => handleReadArticle(newsItem)}
            />
          ))}
        </div>
      </div>

      {selectedNews && (
        <NewsModal
          news={selectedNews}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default NewsSection;
