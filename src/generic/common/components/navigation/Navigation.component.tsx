import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from '@/src/generic/common/components/navigation/Navigation.module.scss';

export const NavigationComponent = () => {
  const { t } = useTranslation();

  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <ul className={styles.list}>
        <li>
          <Link
            to={'/paperclips'}
            className={styles.link}
          >
            {t('common.navigation.game')}
          </Link>
        </li>
        <li>
          <Link
            to={'/paperclips/explore'}
            className={styles.link}
          >
            {t('common.navigation.explore')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
