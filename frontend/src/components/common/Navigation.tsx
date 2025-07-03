import React from 'react';
import { Section } from '../../types';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const sections: { key: Section; label: string }[] = [
    { key: 'games', label: 'Casino Games' },
    { key: 'promotions', label: 'Promotions' },
    { key: 'news', label: 'News' }
  ];

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-buttons">
          {sections.map(section => (
            <button
              key={section.key}
              className={`nav-button ${activeSection === section.key ? 'active' : ''}`}
              onClick={() => onSectionChange(section.key)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
