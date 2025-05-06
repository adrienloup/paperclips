import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dials/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const PaperclipPriceComponent = () => {
  const { t } = useTranslation();
  const game = useGame();
  const setGame = useGameDispatch();

  return (
    <DialsComponent>
      {/*{game.paperclipPriceRef.toFixed(2)}*/}
      <DialComponent
        value={game.paperclipPrice}
        style="currency"
        label={t('game.paperclipPrice')}
        bonus={
          game.marketingBonus > 1 ? (
            <BonusComponent
              value={game.marketingBonus}
              prefix="x"
            />
          ) : null
        }
      />
      <div className={styles.buttons}>
        <ClickerComponent
          className={styles.button}
          aria-label="Decrease paperclip price"
          value={0.01 * game.marketingBonus}
          prefix="-"
          suffix="price"
          disabled={game.paperclipPriceRef === 0.1}
          onClick={() => setGame({ type: 'DECREASE_PAPERCLIP_PRICE' })}
        >
          -
        </ClickerComponent>
        <ClickerComponent
          className={styles.button}
          aria-label="Increase paperclip price"
          value={0.01 * game.marketingBonus}
          prefix="+"
          suffix="price"
          disabled={game.paperclipPriceRef === 1}
          onClick={() => setGame({ type: 'INCREASE_PAPERCLIP_PRICE' })}
        >
          +
        </ClickerComponent>
      </div>
    </DialsComponent>
  );
};
