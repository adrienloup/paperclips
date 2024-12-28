import { useTranslation } from 'react-i18next';
import { useGame } from '../../useGame';
import styles from './Paperclips.module.scss';

function PaperclipsComponent() {
  const { t } = useTranslation();
  const game = useGame();

  return (
    <h1 className={styles.paperclips}>
      {t('game.paperclips', {
        value: game.paperclips.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
      })}
    </h1>
  );
}

export default PaperclipsComponent;
