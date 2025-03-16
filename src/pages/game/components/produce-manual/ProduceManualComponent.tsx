import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ProduceManualComponent = () => {
  //console.log('ProduceManualComponent');
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <ButtonComponent
      className={styles.button}
      disabled={game.wireStock <= 0}
      onClick={() => setGame({ type: 'PRODUCE_MANUAL' })}
    >
      {t('game.produceManual')}
    </ButtonComponent>
  );
};
