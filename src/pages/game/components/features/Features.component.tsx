import { useCallback, useEffect } from 'react';
import { useGame } from '@/src/pages/game/useGame.ts';
import { useFeaturesDispatch } from '@/src/pages/game/components/features/useFeatures.ts';
import styles from '@/src/pages/game/components/features/Features.module.scss';

export const FeaturesComponent = () => {
  //console.log('FeaturesComponent');
  const game = useGame();
  const setFeatures = useFeaturesDispatch();

  const update = useCallback(() => {
    setFeatures({ type: game.clips >= 1e3 ? 'ENABLE' : 'DISABLE', feature: 'marketing' });
  }, [game.clips]);

  useEffect(() => {
    update();
  }, [update]);

  return <div className={styles.features}>Features {game.clips}</div>;
};
