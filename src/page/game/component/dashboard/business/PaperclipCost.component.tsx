import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/page/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/component/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/component/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/component/clicker/Clicker.component.tsx';
import { BonusComponent } from '@/src/generic/common/component/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/component/card/Card.module.scss';

export const PaperclipCostComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <DialsComponent>
      {/*{game.paperclipCostRef.toFixed(2)}*/}
      <DialComponent
        value={game.paperclipCost}
        style="currency"
        label={t('game.paperclipCost')}
        bonus={
          game.marketing > 1 ? (
            <BonusComponent
              value={game.marketing}
              sign="x"
            />
          ) : null
        }
      />
      <div className={styles.buttons}>
        <ClickerComponent
          className={styles.button}
          disabled={game.paperclipCostRef === 0.1}
          aria-label="Decrease paperclip price"
          sign="-"
          value={0.01 * game.marketing}
          onClick={() => setGame({ type: 'DECREASE_PAPERCLIP_COST' })}
        >
          -
        </ClickerComponent>
        <ClickerComponent
          className={styles.button}
          disabled={game.paperclipCostRef === 1}
          aria-label="Increase paperclip price"
          value={0.01 * game.marketing}
          onClick={() => setGame({ type: 'INCREASE_PAPERCLIP_COST' })}
        >
          +
        </ClickerComponent>
      </div>
    </DialsComponent>
  );
};
