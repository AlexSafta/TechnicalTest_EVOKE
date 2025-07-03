import { Router, Request, Response } from 'express';
import { casinoContent } from '../data/casinoContent';

const router = Router();

// GET /api/content - Returns all casino content
router.get('/content', (req: Request, res: Response) => {
  try {
    // Add some metadata to the response
    const response = {
      data: casinoContent,
      metadata: {
        gamesCount: casinoContent.casinoGames.length,
        promotionsCount: casinoContent.promotions.length,
        newsCount: casinoContent.casinoNews.length,
        lastUpdated: new Date().toISOString()
      }
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching casino content:', error);
    res.status(500).json({ 
      error: 'Failed to fetch casino content',
      message: 'Internal server error'
    });
  }
});

// GET /api/content/games - Returns only games (optional endpoint)
router.get('/content/games', (req: Request, res: Response) => {
  try {
    res.json({
      data: casinoContent.casinoGames,
      count: casinoContent.casinoGames.length
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ 
      error: 'Failed to fetch games',
      message: 'Internal server error'
    });
  }
});

// GET /api/content/promotions - Returns only promotions (optional endpoint)
router.get('/content/promotions', (req: Request, res: Response) => {
  try {
    res.json({
      data: casinoContent.promotions,
      count: casinoContent.promotions.length
    });
  } catch (error) {
    console.error('Error fetching promotions:', error);
    res.status(500).json({ 
      error: 'Failed to fetch promotions',
      message: 'Internal server error'
    });
  }
});

// GET /api/content/news - Returns only news (optional endpoint)
router.get('/content/news', (req: Request, res: Response) => {
  try {
    res.json({
      data: casinoContent.casinoNews,
      count: casinoContent.casinoNews.length
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ 
      error: 'Failed to fetch news',
      message: 'Internal server error'
    });
  }
});

export { router as contentRouter };
