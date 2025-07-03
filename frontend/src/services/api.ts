import { CasinoContent, ApiResponse } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  private async fetchWithError<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async getCasinoContent(): Promise<ApiResponse<CasinoContent>> {
    return this.fetchWithError<ApiResponse<CasinoContent>>(`${API_BASE_URL}/content`);
  }

  async getGames() {
    return this.fetchWithError(`${API_BASE_URL}/content/games`);
  }

  async getPromotions() {
    return this.fetchWithError(`${API_BASE_URL}/content/promotions`);
  }

  async getNews() {
    return this.fetchWithError(`${API_BASE_URL}/content/news`);
  }

  async checkHealth() {
    return this.fetchWithError(`${API_BASE_URL.replace('/api', '')}/health`);
  }
}

export const apiService = new ApiService();
