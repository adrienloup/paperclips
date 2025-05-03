import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

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
              prefix="x"
            />
          ) : null
        }
      />
      <div className={styles.buttons}>
        <ClickerComponent
          className={styles.button}
          aria-label="Decrease paperclip price"
          value={0.01 * game.marketing}
          prefix="-"
          suffix="price"
          disabled={game.paperclipCostRef === 0.1}
          onClick={() => setGame({ type: 'DECREASE_PAPERCLIP_COST' })}
        >
          -
        </ClickerComponent>
        <ClickerComponent
          className={styles.button}
          aria-label="Increase paperclip price"
          value={0.01 * game.marketing}
          prefix="+"
          suffix="price"
          disabled={game.paperclipCostRef === 1}
          onClick={() => setGame({ type: 'INCREASE_PAPERCLIP_COST' })}
        >
          +
        </ClickerComponent>
      </div>
    </DialsComponent>
  );
};
