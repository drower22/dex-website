'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Simula um tempo de carregamento

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default PageWrapper;
