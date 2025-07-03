import { CasinoGame } from '../types';

export const filterGames = (
  games: CasinoGame[],
  searchTerm: string,
  selectedCategories: string[]
): CasinoGame[] => {
  return games.filter(game => {
    const matchesSearch = searchTerm === '' || 
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.some(category => game.categories.includes(category));
    
    return matchesSearch && matchesCategory;
  });
};

export const getUniqueCategories = (games: CasinoGame[]): string[] => {
  const categories = games.flatMap(game => game.categories);
  return [...new Set(categories)].sort();
};

export const getCategoryDisplayName = (category: string): string => {
  const displayNames: Record<string, string> = {
    'slots': 'Slots',
    'live-casino': 'Live Casino',
    'table-games': 'Table Games',
    'jackpot': 'Jackpot',
    'popular': 'Popular',
    'new': 'New',
    'high-volatility': 'High Volatility',
    'low-volatility': 'Low Volatility',
    'medium-volatility': 'Medium Volatility',
    'adventure': 'Adventure',
    'megaways': 'Megaways',
    'progressive': 'Progressive',
    'roulette': 'Roulette',
    'blackjack': 'Blackjack',
    'poker': 'Poker',
    'game-show': 'Game Show',
    'vampire': 'Vampire',
    'fruit': 'Fruit',
    'classic': 'Classic'
  };
  
  return displayNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
};

export const formatRTP = (rtp: number): string => {
  return `${rtp.toFixed(2)}%`;
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const isPromotionExpired = (expiryDate: string): boolean => {
  return new Date(expiryDate) < new Date();
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
