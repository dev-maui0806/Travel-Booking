'use client'; // Requires client-side interaction (fetching, state)

import { useState, useEffect, useCallback } from 'react';
import { fetchMockTours } from '@/lib/mockData'; // Updated import
import type { Tour } from '@/types';

interface UseToursResult {
  tours: Tour[];
  loading: boolean;
  error: Error | null;
  fetchMoreTours?: () => void; // Optional: For infinite scroll/pagination
  hasMore?: boolean; // Optional: For infinite scroll/pagination
}

interface UseToursOptions {
  initialLimit?: number;
  pageSize?: number; // For pagination/infinite scroll
}

// Example hook to fetch tours, potentially with pagination
export function useTours({ initialLimit = 10, pageSize = 10 }: UseToursOptions = {}): UseToursResult {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalFetched, setTotalFetched] = useState<number>(0);
  // For mock data, we might not know the true total, so assume there could be more initially
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadTours = useCallback(async (pageToLoad: number, limit: number) => {
    setLoading(true);
    setError(null);
    try {
      // For mock data, pagination needs simulation. 
      // We fetch *all* mock tours and slice them.
      // A more realistic mock would involve passing page/limit to fetchMockTours if it supported it.
      const allMockTours = await fetchMockTours(); 
      const startIndex = (pageToLoad - 1) * limit;
      const endIndex = startIndex + limit;
      const fetchedTours = allMockTours.slice(startIndex, endIndex);

      setTours((prevTours) => pageToLoad === 1 ? fetchedTours : [...prevTours, ...fetchedTours]);
      setTotalFetched((prev) => prev + fetchedTours.length);
      // Determine if there are more based on whether we fetched a full page *and* if total fetched < total available (if known)
      setHasMore(fetchedTours.length === limit && (totalFetched + fetchedTours.length < allMockTours.length)); 

    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch mock tours'));
    } finally {
      setLoading(false);
    }
  }, [totalFetched]); // Include totalFetched dependency

  // Initial fetch
  useEffect(() => {
    setTotalFetched(0); // Reset count on initial load/options change
    setCurrentPage(1);
    loadTours(1, initialLimit);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadTours, initialLimit]); // Keep loadTours out of deps array if it causes infinite loops due to totalFetched

  // Function to fetch the next page
  const fetchMoreTours = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      loadTours(nextPage, pageSize);
    }
  }, [loading, hasMore, currentPage, loadTours, pageSize]);

  return { tours, loading, error, fetchMoreTours, hasMore };
}

// You could create other hooks like useTour(slug), useBookingForm(), etc. 