import React from 'react';
import { CasinoGame } from '../../types';
import { useFilters } from '../../hooks/useFilters';
import GameCard from './GameCard';
import SearchBar from './SearchBar';
import GameFilters from './GameFilters';

interface GamesSectionProps {
  games: CasinoGame[];
}

const GamesSection: React.FC<GamesSectionProps> = ({ games }) => {
  const {
    filters,
    filteredGames,
    availableCategories,
    updateSearchTerm,
    toggleCategory,
    clearFilters
  } = useFilters(games);

  return (
    <div className="games-section">
      <div className="container">
        <div className="games-filters">
          <SearchBar
            value={filters.searchTerm}
            onChange={updateSearchTerm}
            placeholder="Search games by title or provider..."
          />
          
          <GameFilters
            availableCategories={availableCategories}
            selectedCategories={filters.selectedCategories}
            onCategoryToggle={toggleCategory}
            onClearFilters={clearFilters}
          />
        </div>

        {filteredGames.length > 0 ? (
          <div className="games-grid">
            {filteredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No games found</h3>
            <p>Try adjusting your search or filters to find more games.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesSection;
