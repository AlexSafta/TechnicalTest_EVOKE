import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { CasinoContent, LoadingState } from '../types';

export const useApi = () => {
  const [content, setContent] = useState<CasinoContent | null>(null);
  const [loading, setLoading] = useState<LoadingState>({
    isLoading: false,
    error: null
  });

  const fetchContent = async () => {
    setLoading({ isLoading: true, error: null });
    
    try {
      const response = await apiService.getCasinoContent();
      setContent(response.data);
    } catch (error) {
      setLoading({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch content' 
      });
      return;
    }
    
    setLoading({ isLoading: false, error: null });
  };

  const retryFetch = () => {
    fetchContent();
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return {
    content,
    loading: loading.isLoading,
    error: loading.error,
    retry: retryFetch
  };
};
