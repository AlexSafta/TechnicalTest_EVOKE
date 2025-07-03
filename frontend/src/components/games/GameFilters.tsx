import React from 'react';
import { getCategoryDisplayName } from '../../utils/filters';

interface GameFiltersProps {
  availableCategories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  onClearFilters: () => void;
}

const GameFilters: React.FC<GameFiltersProps> = ({
  availableCategories,
  selectedCategories,
  onCategoryToggle,
  onClearFilters
}) => {
  return (
    <div className="filter-categories">
      {availableCategories.map(category => (
        <button
          key={category}
          className={`category-button ${selectedCategories.includes(category) ? 'active' : ''}`}
          onClick={() => onCategoryToggle(category)}
        >
          {getCategoryDisplayName(category)}
        </button>
      ))}
      {selectedCategories.length > 0 && (
        <button
          className="clear-filters"
          onClick={onClearFilters}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default GameFilters;
