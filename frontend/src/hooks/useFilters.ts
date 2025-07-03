import { useState, useMemo } from 'react';
import { CasinoGame, FilterState } from '../types';

export const useFilters = (games: CasinoGame[]) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    selectedCategories: []
  });

  const filteredGames = useMemo(() => {
    return games.filter(game => {
      // Search filter
      const matchesSearch = game.title
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = filters.selectedCategories.length === 0 || 
        filters.selectedCategories.some(category => 
          game.categories.includes(category)
        );
      
      return matchesSearch && matchesCategory;
    });
  }, [games, filters]);

  const updateSearchTerm = (searchTerm: string) => {
    setFilters(prev => ({ ...prev, searchTerm }));
  };

  const updateCategories = (categories: string[]) => {
    setFilters(prev => ({ ...prev, selectedCategories: categories }));
  };

  const toggleCategory = (category: string) => {
    setFilters(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter(c => c !== category)
        : [...prev.selectedCategories, category]
    }));
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      selectedCategories: []
    });
  };

  // Get unique categories from all games
  const availableCategories = useMemo(() => {
    const categories = games.flatMap(game => game.categories);
    return [...new Set(categories)].sort();
  }, [games]);

  return {
    filters,
    filteredGames,
    availableCategories,
    updateSearchTerm,
    updateCategories,
    toggleCategory,
    clearFilters
  };
};
