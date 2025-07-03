// Types for Casino Content Portal

export interface CasinoGame {
  id: string;
  title: string;
  provider: string;
  categories: string[];
  imageUrl: string;
  description: string;
  rtp: number;
  volatility: 'Low' | 'Medium' | 'High' | 'Medium-Low' | 'Medium-High';
  isNew?: boolean;
  isPopular?: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  snippet: string;
  fullTerms: string;
  imageUrl: string;
  expiryDate: string;
}

export interface CasinoNews {
  id: string;
  title: string;
  snippet: string;
  fullContent: string;
  date: string;
  tags: string[];
}

export interface CasinoContent {
  casinoGames: CasinoGame[];
  promotions: Promotion[];
  casinoNews: CasinoNews[];
}

export interface ApiResponse<T> {
  data: T;
  metadata?: {
    gamesCount: number;
    promotionsCount: number;
    newsCount: number;
    lastUpdated: string;
  };
}

export type Section = 'games' | 'promotions' | 'news';

export interface FilterState {
  searchTerm: string;
  selectedCategories: string[];
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
