import { useTranslation } from 'react-i18next';
import { Paperclips } from './Paperclips.type';
import styles from './Paperclips.module.scss';

export const PaperclipsComponent = ({ paperclips }: Paperclips) => {
  const { t } = useTranslation();

  return (
    <h1 className={styles.paperclips}>
      {t('game.paperclips', {
        value: paperclips.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
      })}
    </h1>
  );
};
