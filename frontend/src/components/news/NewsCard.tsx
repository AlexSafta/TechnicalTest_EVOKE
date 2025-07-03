import React from 'react';
import { CasinoNews } from '../../types';
import { formatDate } from '../../utils/filters';

interface NewsCardProps {
  news: CasinoNews;
  onReadArticle: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, onReadArticle }) => {
  return (
    <div className="news-card">
      <h3>{news.title}</h3>
      <p className="date">{formatDate(news.date)}</p>
      <p className="snippet">{news.snippet}</p>
      
      <div className="tags">
        {news.tags.map(tag => (
          <span key={tag} className="news-tag">
            {tag}
          </span>
        ))}
      </div>
      
      <button 
        className="read-more-btn"
        onClick={onReadArticle}
      >
        Read Article
      </button>
    </div>
  );
};

export default NewsCard;
