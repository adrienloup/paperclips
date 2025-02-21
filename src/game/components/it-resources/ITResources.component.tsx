import { useGame, useDashboardDispatch } from '@/src/game/repository/useGame.ts';
import { CardComponent } from '@/src/generic/common/components/card/Card.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ITResourcesComponent = () => {
  const setDashboard = useDashboardDispatch();
  const game = useGame();

  return (
    <CardComponent
      style={{
        gridColumn: '3',
        gridRow: '1',
      }}
    >
      <TitleComponent
        className={styles.title}
        title="IT Resources"
      />
      <GroupComponent>
        <DialComponent
          value={game.trust}
          limit={100}
          notation="compact"
          label="Trust"
        />
        <div className={styles.text}>
          +1 at&nbsp;
          <NumberComponent
            className={styles.number}
            value={game.trustCost}
            notation="compact"
          />
          &nbsp;clips
        </div>
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={game.processors}
          notation="compact"
          label="Processors"
        />
        <DialComponent
          value={game.memory}
          notation="compact"
          label="Memory"
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.processors + game.memory >= game.trust}
          onClick={() => setDashboard({ type: 'INCREASE_PROCESSORS' })}
        >
          Élever
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.memory + game.processors >= game.trust}
          onClick={() => setDashboard({ type: 'INCREASE_MEMORY' })}
        >
          Élever
        </ButtonComponent>
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={game.operations}
          limit={game.operationsLimit}
          notation="compact"
          label="Operations"
        />
        <DialComponent
          value={game.creativity}
          notation="compact"
          label="Creativity"
        />
      </GroupComponent>
    </CardComponent>
  );
};
