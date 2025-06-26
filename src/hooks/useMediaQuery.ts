'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking the state of a media query.
 * @param {string} query - The media query string to match (e.g., '(min-width: 768px)').
 * @returns {boolean} - True if the media query matches, false otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    
    // Set the initial state
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    // Add the event listener
    media.addEventListener('change', listener);

    // Clean up the event listener on component unmount
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
