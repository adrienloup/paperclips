import { useCallback } from 'react';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';

export const BusinessComponent = () => {
  console.log('BusinessComponent');

  const sellClips = useCallback(() => {
    console.log('sellClips');
  }, []);

  useInterval(sellClips, 5e2);

  return <>Business</>;
};
