import { useCallback, useEffect } from 'react';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { CardComponent } from '@/src/generic/common/components/cards/card/Card.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { TrustComponent } from '@/src/pages/game/components/dashboard/resources/Trust.component.tsx';
import { SwarmGiftsComponent } from '@/src/pages/game/components/dashboard/resources/SwarmGifts.component.tsx';
import { MemoryComponent } from '@/src/pages/game/components/dashboard/resources/Memory.component.tsx';
import { ProcessorComponent } from '@/src/pages/game/components/dashboard/resources/Processor.component.tsx';
import { OperationComponent } from '@/src/pages/game/components/dashboard/resources/Operation.component.tsx';
import { CreativityComponent } from '@/src/pages/game/components/dashboard/resources/Creativity.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import { SwarmComputingComponent } from '@/src/pages/game/components/dashboard/resources/SwarmComputing.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const ResourcesComponent = () => {
  const game = useGame();
  const setGame = useGameDispatch();
  const setNotices = useNoticesDispatch();
  const setAlerts = useAlertsDispatch();

  const update = useCallback(() => {
    if (game.paperclip >= 2e3 && !game.feature.resources) {
      setGame({ type: 'UPDATE_FEATURE', feature: 'resources', value: true });
      setNotices({ type: 'ENABLE_NOTICE', id: 'resources' });
      setAlerts({ type: 'ADD_ALERT', alert: { id: 'resources', text: 'resources alert' } });
    }
  }, [game.paperclip, game.feature.resources]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <CardComponent className={styles.resources}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Resources
      </TitleComponent>
      {game.feature.resources ? (
        <>
          <TrustComponent />
          <SwarmGiftsComponent />
          <MemoryComponent />
          <ProcessorComponent />
          <OperationComponent />
          <CreativityComponent />
          <SwarmComputingComponent />
        </>
      ) : (
        <EmptyComponent empty="game.empty.resources" />
      )}
    </CardComponent>
  );
};
