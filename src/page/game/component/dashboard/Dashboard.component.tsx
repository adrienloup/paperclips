import { useCallback } from 'react';
import { useInterval } from '@/src/generic/hook/useInterval.ts';
import { useGameDispatch } from '@/src/page/game/useGame.ts';
import { PaperclipComponent } from '@/src/page/game/component/dashboard/paperclip/Paperclip.component.tsx';
import { CardsComponent } from '@/src/generic/common/component/cards/Cards.component.tsx';
import { ManufacturingComponent } from '@/src/page/game/component/dashboard/manufacturing/Manufacturing.component.tsx';
import { BusinessComponent } from '@/src/page/game/component/dashboard/business/Business.component.tsx';
import { ResourcesComponent } from '@/src/page/game/component/dashboard/resources/Resources.component.tsx';
import { ProjectsComponent } from '@/src/page/game/component/dashboard/projects/Projects.component.tsx';
import { InvestmentsComponent } from '@/src/page/game/component/dashboard/investments/Investments.component.tsx';
import { NotificationsComponent } from '@/src/page/game/component/dashboard/notifications/Notifications.component.tsx';
import styles from '@/src/page/game/component/dashboard/Dashboard.module.scss';

export const DashboardComponent = () => {
  const setGame = useGameDispatch();

  const sellUnsold = useCallback(() => {
    // console.log('sellUnsold');
    setGame({ type: 'SELL_UNSOLD' });
  }, []);

  const updatePerSecond = useCallback(() => {
    // console.log('updatePerSecond');
    setGame({ type: 'UPDATE_PER_SECOND' });
  }, []);

  const updateWireCost = useCallback(() => {
    // console.log('updateWireCost');
    setGame({ type: 'UPDATE_WIRE_COST' });
  }, []);

  useInterval(sellUnsold, 5e2);
  useInterval(updatePerSecond, 1e3);
  useInterval(updateWireCost, 1e4);

  return (
    <article
      className={styles.dashboard}
      role="article"
    >
      <PaperclipComponent />
      <CardsComponent>
        <ManufacturingComponent />
        <BusinessComponent />
        <ResourcesComponent />
        <ProjectsComponent />
        <InvestmentsComponent />
      </CardsComponent>
      <NotificationsComponent />
    </article>
  );
};
