import { useCallback, useEffect, useRef } from 'react';
import { useInterval } from '@/src/generic/hooks/useInterval';
import { useGame, useDashboardDispatch } from '@/src/game/repository/useGame.ts';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component';
import { InitializerComponent } from '@/src/game/components/initializer/Initializer.component';
import { ClipsComponent } from '@/src/game/components/clips/Clips.component';
import { CardsComponent } from '@/src/generic/common/components/cards/Cards.component';
import { ManufacturingComponent } from '@/src/game/components/manufacturing/Manufacturing.component';
import { BusinessComponent } from '@/src/game/components/business/Business.component';
import { ITResourcesComponent } from '@/src/game/components/it-resources/ITResources.component';
import { ProjectsComponent } from '@/src/game/components/projects/Projects.component';
import styles from '@/src/game/components/dashboard/Dashboard.module.scss';

function DashboardComponent() {
  const setGame = useDashboardDispatch();
  const game = useGame();
  const gameRef = useRef(game);

  useEffect(() => {
    gameRef.current = game;
  }, [game]);

  // SELL_CLIPS
  const sellClips = useCallback(() => {
    const { clipsTransit } = gameRef.current;
    if (clipsTransit > 0) {
      setGame({ type: 'SELL_CLIPS' });
    }
  }, []);

  // PRODUCE_AUTOMATIC_CLIPS, UPDATE_PER_SECOND
  const updatePerSecond = useCallback(() => {
    const { autoClippers, megaClippers, wiresStock } = gameRef.current;
    if ((autoClippers > 0 || megaClippers > 0) && wiresStock > 0) {
      setGame({ type: 'PRODUCE_AUTOMATIC_CLIPS' });
    }
    setGame({ type: 'UPDATE_PER_SECOND' });
  }, []);

  // UPDATE_WIRE_COST
  const updateWireCost = useCallback(() => {
    setGame({ type: 'UPDATE_WIRE_COST' });
  }, []);

  useInterval(sellClips, 4e2);
  useInterval(updatePerSecond, 1e3);
  useInterval(updateWireCost, 1e4);

  return (
    <>
      <DebugComponent>
        <InitializerComponent />
      </DebugComponent>
      <article className={styles.dashboard}>
        <ClipsComponent />
        <CardsComponent>
          <ManufacturingComponent />
          <BusinessComponent />
          <ITResourcesComponent />
          <ProjectsComponent />
        </CardsComponent>
      </article>
    </>
  );
}

export default DashboardComponent;
