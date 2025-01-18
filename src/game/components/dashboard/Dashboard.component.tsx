import { useTranslation } from 'react-i18next';
import styles from './Dashboard.module.scss';

function DashboardComponent() {
  const { t } = useTranslation();

  return <article className={styles.dashboard}>dashboard {t('game.title')}</article>;
}

export default DashboardComponent;
