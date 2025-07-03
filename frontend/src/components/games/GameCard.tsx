import React from 'react';
import { CasinoGame } from '../../types';
import { formatRTP } from '../../utils/filters';

interface GameCardProps {
  game: CasinoGame;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/300x200?text=Game+Image';
  };

  return (
    <div className="game-card">
      <div className="game-badges">
        {game.isNew && <span className="badge new">New</span>}
        {game.isPopular && <span className="badge popular">Popular</span>}
      </div>
      
      <img
        src={game.imageUrl}
        alt={game.title}
        onError={handleImageError}
      />
      
      <div className="game-card-content">
        <h3>{game.title}</h3>
        <p className="provider">by {game.provider}</p>
        <p className="description">{game.description}</p>
        
        <div className="game-meta">
          <span className="game-rtp">RTP: {formatRTP(game.rtp)}</span>
          <span className="game-volatility">{game.volatility}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
