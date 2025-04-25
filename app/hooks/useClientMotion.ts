import { useState, useEffect } from 'react';

export function useClientMotion() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
} 