import { useCallback } from 'react';

/*
 * Custom hook for loading more data on demand
 * @param loadMore - Function to load more data
 * @param nextUrl - URL for the next page of data, or null if no more data
 */
const useLoadMore = (
  loadMore: (url: string) => Promise<void>,
  nextUrl: string | null
) => {
  // Function to load more data when called
  const handleLoadMore = useCallback(() => {
    if (nextUrl) {
      loadMore(nextUrl);
    }
  }, [loadMore, nextUrl]);

  return { loadMore: handleLoadMore };
};

export default useLoadMore;