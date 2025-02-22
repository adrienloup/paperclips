import { useEffect } from 'react';
import { useGame, useGameDispatch } from '@/src/game/repository/useGame';
import { CardComponent } from '@/src/generic/common/components/card/Card.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ITResourcesComponent = () => {
  const setGame = useGameDispatch();
  const game = useGame();

  useEffect(() => {
    const milestones = [
      { clips: 3e3, trustTransit: 0 },
      { clips: 5e3, trustTransit: 1 },
      { clips: 8e3, trustTransit: 2 },
      { clips: 13e3, trustTransit: 3 },
    ];

    milestones.forEach(({ clips, trustTransit }) => {
      if (game.clips >= clips && game.trustTransit === trustTransit) {
        setGame({ type: 'UPDATE_TRUST', trust: 0 });
      }
    });
  }, [game.clips, game.trustTransit]);

  return (
    <>
      {game.clips >= 2e3 && game.itResourcesFeature.open ? (
        <CardComponent>
          <TitleComponent className={styles.title}>IT Resources</TitleComponent>
          <GroupComponent>
            <DialComponent
              value={game.trust}
              limit={100}
              notation="compact"
              label="Trust"
              animate={game.itResourcesFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'itResourcesFeature',
                  open: true,
                  animate: false,
                })
              }
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
          <DialComponent
            value={game.processors}
            notation="compact"
            label="Processors"
            animate={game.itResourcesFeature.animate}
            onAnimationEnd={() =>
              setGame({
                type: 'UPDATE_FEATURE',
                feature: 'itResourcesFeature',
                open: true,
                animate: false,
              })
            }
          />
          <ButtonComponent
            className={styles.button}
            disabled={game.processors + game.memory >= game.trust}
            onClick={() => setGame({ type: 'INCREASE_PROCESSORS' })}
          >
            Créer
          </ButtonComponent>
          <DialComponent
            value={game.memory}
            notation="compact"
            label="Memory"
            animate={game.itResourcesFeature.animate}
            onAnimationEnd={() =>
              setGame({
                type: 'UPDATE_FEATURE',
                feature: 'itResourcesFeature',
                open: true,
                animate: false,
              })
            }
          />
          <ButtonComponent
            className={styles.button}
            disabled={game.memory + game.processors >= game.trust}
            onClick={() => setGame({ type: 'INCREASE_MEMORY' })}
          >
            Créer
          </ButtonComponent>
          <GroupComponent>
            <DialComponent
              value={game.operations}
              limit={game.operationsLimit}
              notation="compact"
              label="Operations"
              animate={game.itResourcesFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'itResourcesFeature',
                  open: true,
                  animate: false,
                })
              }
            />
            <DialComponent
              value={game.creativity}
              notation="compact"
              label="Creativity"
              animate={game.itResourcesFeature.animate}
              onAnimationEnd={() =>
                setGame({
                  type: 'UPDATE_FEATURE',
                  feature: 'itResourcesFeature',
                  open: true,
                  animate: false,
                })
              }
            />
          </GroupComponent>
        </CardComponent>
      ) : null}
    </>
  );
};
