import request from 'supertest';
import app from '../server';

describe('Casino Content API', () => {
  describe('GET /api/content', () => {
    it('should return all casino content with correct structure', async () => {
      const response = await request(app)
        .get('/api/content')
        .expect(200);

      expect(response.body).toHaveProperty('data');
      expect(response.body).toHaveProperty('metadata');
      
      const { data, metadata } = response.body;
      
      // Check main data structure
      expect(data).toHaveProperty('casinoGames');
      expect(data).toHaveProperty('promotions');
      expect(data).toHaveProperty('casinoNews');
      
      // Check that data is arrays
      expect(Array.isArray(data.casinoGames)).toBe(true);
      expect(Array.isArray(data.promotions)).toBe(true);
      expect(Array.isArray(data.casinoNews)).toBe(true);
      
      // Check metadata
      expect(metadata).toHaveProperty('gamesCount');
      expect(metadata).toHaveProperty('promotionsCount');
      expect(metadata).toHaveProperty('newsCount');
      expect(metadata).toHaveProperty('lastUpdated');
      
      // Check that counts match array lengths
      expect(metadata.gamesCount).toBe(data.casinoGames.length);
      expect(metadata.promotionsCount).toBe(data.promotions.length);
      expect(metadata.newsCount).toBe(data.casinoNews.length);
    });

    it('should return games with correct properties', async () => {
      const response = await request(app)
        .get('/api/content')
        .expect(200);

      const games = response.body.data.casinoGames;
      expect(games.length).toBeGreaterThan(0);
      
      const firstGame = games[0];
      expect(firstGame).toHaveProperty('id');
      expect(firstGame).toHaveProperty('title');
      expect(firstGame).toHaveProperty('provider');
      expect(firstGame).toHaveProperty('categories');
      expect(firstGame).toHaveProperty('imageUrl');
      expect(firstGame).toHaveProperty('description');
      expect(firstGame).toHaveProperty('rtp');
      expect(firstGame).toHaveProperty('volatility');
      
      expect(Array.isArray(firstGame.categories)).toBe(true);
      expect(typeof firstGame.rtp).toBe('number');
    });

    it('should return promotions with correct properties', async () => {
      const response = await request(app)
        .get('/api/content')
        .expect(200);

      const promotions = response.body.data.promotions;
      expect(promotions.length).toBeGreaterThan(0);
      
      const firstPromotion = promotions[0];
      expect(firstPromotion).toHaveProperty('id');
      expect(firstPromotion).toHaveProperty('title');
      expect(firstPromotion).toHaveProperty('snippet');
      expect(firstPromotion).toHaveProperty('fullTerms');
      expect(firstPromotion).toHaveProperty('imageUrl');
      expect(firstPromotion).toHaveProperty('expiryDate');
    });

    it('should return news with correct properties', async () => {
      const response = await request(app)
        .get('/api/content')
        .expect(200);

      const news = response.body.data.casinoNews;
      expect(news.length).toBeGreaterThan(0);
      
      const firstNews = news[0];
      expect(firstNews).toHaveProperty('id');
      expect(firstNews).toHaveProperty('title');
      expect(firstNews).toHaveProperty('snippet');
      expect(firstNews).toHaveProperty('fullContent');
      expect(firstNews).toHaveProperty('date');
      expect(firstNews).toHaveProperty('tags');
      
      expect(Array.isArray(firstNews.tags)).toBe(true);
    });
  });

  describe('GET /api/content/games', () => {
    it('should return only games', async () => {
      const response = await request(app)
        .get('/api/content/games')
        .expect(200);

      expect(response.body).toHaveProperty('data');
      expect(response.body).toHaveProperty('count');
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.count).toBe(response.body.data.length);
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('service');
      expect(response.body.status).toBe('OK');
    });
  });

  describe('404 handler', () => {
    it('should return 404 for non-existent routes', async () => {
      const response = await request(app)
        .get('/api/nonexistent')
        .expect(404);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Route not found');
    });
  });
});
