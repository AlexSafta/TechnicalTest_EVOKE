import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameFilters from '../components/games/GameFilters';

describe('GameFilters', () => {
  const mockProps = {
    availableCategories: ['slots', 'live-casino', 'table-games', 'jackpot'],
    selectedCategories: ['slots'],
    onCategoryToggle: jest.fn(),
    onClearFilters: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all available categories', () => {
    render(<GameFilters {...mockProps} />);
    
    expect(screen.getByText('Slots')).toBeInTheDocument();
    expect(screen.getByText('Live Casino')).toBeInTheDocument();
    expect(screen.getByText('Table Games')).toBeInTheDocument();
    expect(screen.getByText('Jackpot')).toBeInTheDocument();
  });

  it('marks selected categories as active', () => {
    render(<GameFilters {...mockProps} />);
    
    const slotsButton = screen.getByText('Slots');
    expect(slotsButton).toHaveClass('active');
    
    const liveCasinoButton = screen.getByText('Live Casino');
    expect(liveCasinoButton).not.toHaveClass('active');
  });

  it('calls onCategoryToggle when category is clicked', () => {
    render(<GameFilters {...mockProps} />);
    
    const liveCasinoButton = screen.getByText('Live Casino');
    fireEvent.click(liveCasinoButton);
    
    expect(mockProps.onCategoryToggle).toHaveBeenCalledWith('live-casino');
  });

  it('shows clear filters button when categories are selected', () => {
    render(<GameFilters {...mockProps} />);
    
    const clearButton = screen.getByText('Clear Filters');
    expect(clearButton).toBeInTheDocument();
  });

  it('calls onClearFilters when clear button is clicked', () => {
    render(<GameFilters {...mockProps} />);
    
    const clearButton = screen.getByText('Clear Filters');
    fireEvent.click(clearButton);
    
    expect(mockProps.onClearFilters).toHaveBeenCalled();
  });

  it('does not show clear filters button when no categories are selected', () => {
    const propsWithoutSelection = {
      ...mockProps,
      selectedCategories: [],
    };
    
    render(<GameFilters {...propsWithoutSelection} />);
    
    const clearButton = screen.queryByText('Clear Filters');
    expect(clearButton).not.toBeInTheDocument();
  });
});
