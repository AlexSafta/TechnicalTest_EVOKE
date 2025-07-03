# 🎰 Casino Content Portal

A full-stack web application built with React, TypeScript, and Express that displays casino content including games, promotions, and news. This project was developed as part of a technical assessment with a focus on clean architecture, responsive design, and modern development practices.

## 🌟 Features

- **Casino Games**: Browse and filter games by categories (slots, live casino, table games, jackpot)
- **Smart Search**: Real-time search functionality with debouncing for optimal performance
- **Promotions**: View current promotions with expiry dates and full terms
- **News & Updates**: Stay informed with the latest casino news and announcements
- **Responsive Design**: Fully responsive interface that works on all devices
- **Modern UI**: Dark theme with smooth animations and professional styling

## 🛠️ Tech Stack

**Frontend:**
- React 18 with TypeScript
- Custom CSS with responsive design
- React Hooks for state management
- Fetch API for HTTP requests

**Backend:**
- Express.js with TypeScript
- CORS enabled for cross-origin requests
- RESTful API design
- Comprehensive error handling

**Testing:**
- Jest for unit testing
- React Testing Library for component testing
- Supertest for API testing

## 📁 Project Structure

```
casino-content-portal/
├── backend/
│   ├── src/
│   │   ├── data/           # Static data files
│   │   ├── routes/         # API route handlers
│   │   ├── tests/          # Backend tests
│   │   └── server.ts       # Express server setup
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service layer
│   │   ├── types/          # TypeScript definitions
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # Global styles
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd casino-content-portal
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

You'll need to run both the backend and frontend servers:

1. **Start the backend server** (Terminal 1)
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend server** (Terminal 2)
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

**Backend:**
```bash
cd backend
npm run build
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
```

## 🧪 Running Tests

**Backend Tests:**
```bash
cd backend
npm test
```

**Frontend Tests:**
```bash
cd frontend
npm test
```

**Watch Mode:**
```bash
npm run test:watch
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/content` | Retrieve all casino content |
| GET | `/api/content/games` | Retrieve games only |
| GET | `/api/content/promotions` | Retrieve promotions only |
| GET | `/api/content/news` | Retrieve news only |
| GET | `/health` | Health check endpoint |

## 🎯 Key Implementation Decisions

### Architecture Choices

- **Separation of Concerns**: Clear separation between API logic, business logic, and UI components
- **Type Safety**: Comprehensive TypeScript usage throughout both frontend and backend
- **Component Composition**: Modular React components with clear responsibilities
- **Custom Hooks**: Reusable logic extracted into custom hooks for better maintainability

### Performance Optimizations

- **Debounced Search**: Search input is debounced to prevent excessive API calls
- **Efficient Filtering**: Client-side filtering with memoization using useMemo
- **Image Error Handling**: Graceful fallbacks for broken image URLs
- **Lazy Loading**: Modal components are only rendered when needed

### User Experience

- **Loading States**: Comprehensive loading indicators for better UX
- **Error Handling**: Graceful error handling with retry mechanisms
- **Responsive Design**: Mobile-first approach with breakpoints for different screen sizes
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support

## 🐛 Challenges Faced & Solutions

### Challenge 1: CORS Configuration
**Issue**: Frontend couldn't connect to backend due to CORS restrictions.
**Solution**: Configured CORS middleware in Express to allow requests from the frontend origin.

### Challenge 2: State Management Complexity
**Issue**: Managing filter state across multiple components was becoming complex.
**Solution**: Created a custom `useFilters` hook to centralize filter logic and make it reusable.

### Challenge 3: Modal Scroll Behavior
**Issue**: Page scrolling was still active when modals were open.
**Solution**: Added body overflow management in modal components with proper cleanup.

### Challenge 4: Search Performance
**Issue**: Search was triggering on every keystroke, causing performance issues.
**Solution**: Implemented debouncing with a 300ms delay to optimize search performance.

## 🚧 Future Enhancements

If I had more time, I would implement:

1. **Advanced Filtering**: Server-side filtering and pagination for large datasets
2. **Game Preview**: Modal previews for games with detailed information
3. **User Preferences**: Local storage for user preferences and favorite games
4. **Real-time Updates**: WebSocket integration for live promotion updates
5. **Analytics**: Integration with analytics tools for usage tracking
6. **PWA Features**: Service workers for offline functionality
7. **Internationalization**: Multi-language support
8. **Dark/Light Theme**: Theme switching capability

## 📊 Testing Strategy

The application includes both unit and integration tests:

- **Backend**: API endpoint testing with supertest
- **Frontend**: Component testing with React Testing Library
- **Coverage**: Focus on critical user journeys and edge cases
- **Error Scenarios**: Tests for error handling and loading states

## 🏆 Best Practices Applied

- **Clean Code**: Consistent naming, proper commenting, and readable structure
- **Git Workflow**: Meaningful commit messages and logical code organization
- **Error Boundaries**: Comprehensive error handling throughout the application
- **Performance**: Optimized re-renders and efficient state management
- **Security**: Input validation and safe HTML rendering

## 📞 Support

For questions or issues, please check the following:

1. Ensure all dependencies are installed correctly
2. Verify that both backend and frontend servers are running
3. Check the browser console for any error messages
4. Ensure ports 3000 and 5000 are available

---

*This project demonstrates full-stack development skills with a focus on clean architecture, user experience, and modern development practices.*
