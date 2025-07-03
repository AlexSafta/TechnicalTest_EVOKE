import React, { useState } from 'react';
import { Section } from './types';
import { useApi } from './hooks/useApi';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorMessage from './components/common/ErrorMessage';
import GamesSection from './components/games/GamesSection';
import PromotionsSection from './components/promotions/PromotionsSection';
import NewsSection from './components/news/NewsSection';
import './styles/globals.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('games');
  const { content, loading, error, retry } = useApi();

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    if (loading) {
      return <LoadingSpinner message="Loading casino content..." />;
    }

    if (error) {
      return (
        <ErrorMessage
          message={error}
          onRetry={retry}
        />
      );
    }

    if (!content) {
      return (
        <ErrorMessage
          message="No content available"
          onRetry={retry}
        />
      );
    }

    switch (activeSection) {
      case 'games':
        return <GamesSection games={content.casinoGames} />;
      case 'promotions':
        return <PromotionsSection promotions={content.promotions} />;
      case 'news':
        return <NewsSection news={content.casinoNews} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header title="🎰 Casino Content Portal" />
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
