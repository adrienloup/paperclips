import { useTranslation } from 'react-i18next';
import { useGameDispatch } from '@/src/pages/game/useGame.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ProduceManualClipsComponent = () => {
  //console.log('ProduceManualClipsComponent');
  const { t } = useTranslation();
  const setGame = useGameDispatch();

  return (
    <ButtonComponent
      className={styles.button}
      onClick={() => setGame({ type: 'PRODUCE_MANUAL_CLIPS' })}
    >
      {t('game.produceManualClips')}
    </ButtonComponent>
  );
};
