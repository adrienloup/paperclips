import { useCallback, useEffect } from 'react';
import { useGame } from '@/src/pages/game/useGame.ts';
import {
  useFeatures,
  useFeaturesDispatch,
} from '@/src/pages/game/components/features/useFeatures.ts';
import { useNotificationDispatch } from '@/src/pages/game/components/notification/useNotification.ts';
import { useAlertDispatch } from '@/src/generic/common/components/alert/useAlert.ts';
import styles from '@/src/pages/game/components/features/Features.module.scss';

export const FeaturesComponent = () => {
  //console.log('FeaturesComponent');
  const game = useGame();
  const features = useFeatures();
  const setFeatures = useFeaturesDispatch();
  const setNotifications = useNotificationDispatch();
  const setAlerts = useAlertDispatch();

  // const update = useCallback(() => {
  //   if (game.clips >= 1e3 && !features.marketing) {
  //     setFeatures({ type: 'ENABLE', feature: 'marketing' });
  //     setNotifications({
  //       type: 'ADD',
  //       id: 'marketing',
  //     });
  //     setAlerts({ type: 'ADD', alert: { text: 'Marketing' } });
  //   } else if (game.clips < 1e3) {
  //     setFeatures({ type: 'DISABLE', feature: 'marketing' });
  //     setNotifications({
  //       type: 'REMOVE',
  //       id: 'marketing',
  //     });
  //   }
  //   if (game.clips >= 2e3 && !features.trust) {
  //     setFeatures({ type: 'ENABLE', feature: 'trust' });
  //     setNotifications({
  //       type: 'ADD',
  //       id: 'trust',
  //     });
  //     setAlerts({ type: 'ADD', alert: { text: 'Trust alert' } });
  //   } else if (game.clips < 2e3) {
  //     setFeatures({ type: 'DISABLE', feature: 'trust' });
  //     setNotifications({
  //       type: 'REMOVE',
  //       id: 'trust',
  //     });
  //   }
  // }, [game.clips]);
  //

  const onToggle = useCallback(
    (limit: number, disable: boolean, feature: string, text: string) => {
      if (game.clips >= limit && disable) {
        setFeatures({ type: 'ENABLE', feature });
        setNotifications({ type: 'ADD', id: feature });
        setAlerts({ type: 'ADD', alert: { text } });
      } else if (game.clips < limit) {
        setFeatures({ type: 'DISABLE', feature });
        setNotifications({ type: 'REMOVE', id: feature });
      }
    },
    [game.clips]
  );

  const update = useCallback(() => {
    onToggle(1e3, !features.marketing, 'marketing', 'Marketing');
    onToggle(1e3, !features.autoClippers, 'autoClippers', 'autoClippers alert');
    onToggle(2e3, !features.trust, 'trust', 'Trust alert');
    onToggle(2e3, !features.projects, 'projects', 'projects alert');
  }, [onToggle]);

  useEffect(() => {
    update();
  }, [update]);

  return <div className={styles.features}>Features {game.clips}</div>;
};
