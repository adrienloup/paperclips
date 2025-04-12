import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const PaperclipsCostComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  const increaseClick = () => setGame({ type: 'INCREASE_PAPERCLIPS_COST' });
  const decreaseClick = () => setGame({ type: 'DECREASE_PAPERCLIPS_COST' });

  return (
    <DialsComponent>
      {game.marketing > 1 && <BonusComponent value={game.marketing} />}
      {/*{game.paperclipsCostRef.toFixed(2)}*/}
      <DialComponent
        value={game.paperclipsCost}
        style="currency"
        label={t('game.paperclipsCost')}
      />
      <ClickerComponent
        className={styles.button}
        disabled={game.paperclipsCostRef === 1}
        aria-label="Increase selling price"
        value={0.01 * game.marketing}
        onClick={increaseClick}
      >
        <IconComponent
          className={styles.icon}
          icon="add_circle"
        />
      </ClickerComponent>
      <ClickerComponent
        className={styles.button}
        disabled={game.paperclipsCostRef === 0.1}
        aria-label="Decrease selling price"
        sign="-"
        value={0.01 * game.marketing}
        onClick={decreaseClick}
      >
        <IconComponent
          className={styles.icon}
          icon="do_not_disturb_on"
        />
      </ClickerComponent>
    </DialsComponent>
  );
};
