import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ProducePerSecondComponent = () => {
  //console.log('ProducePerSecondComponent');
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <GroupComponent>
      {game.produceBonus > 1 && <BonusComponent value={game.produceBonus} />}
      <DialComponent
        value={game.producePerSecond}
        notation="compact"
        label={t('game.producePerSecond')}
      />
      <ButtonComponent
        className={styles.button}
        disabled={game.wireStock <= 0}
        onClick={() => setGame({ type: 'PRODUCE_MANUAL' })}
      >
        {t('game.produceManual')}
        <span>1</span>
      </ButtonComponent>
    </GroupComponent>
  );
};
