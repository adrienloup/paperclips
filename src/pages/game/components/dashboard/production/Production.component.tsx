import { useGame } from '@/src/pages/game/useGame.ts';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { CardComponent } from '@/src/generic/common/components/cards/card/Card.component.tsx';
import { HarvesterDroneComponent } from '@/src/pages/game/components/dashboard/production/HarvesterDrone.component.tsx';
import { WireDroneComponent } from '@/src/pages/game/components/dashboard/production/WireDrone.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const ProductionComponent = () => {
  const game = useGame();

  return (
    <CardComponent className={styles.production}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Production
      </TitleComponent>
      {game.feature.production ? (
        <>
          <HarvesterDroneComponent />
          <WireDroneComponent />
        </>
      ) : (
        <EmptyComponent empty="game.empty" />
      )}
    </CardComponent>
  );
};
