import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from '@/src/generic/common/components/navigation/Navigation.module.scss';

export const NavigationComponent = ({ open }: { open: boolean }) => {
  const { t } = useTranslation();

  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <ul className={styles.list}>
        <li>
          <Link
            className={styles.link}
            tabIndex={!open ? -1 : 0}
            to={'/paperclips'}
          >
            {t('common.navigation.game')}
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            tabIndex={!open ? -1 : 0}
            to={'/paperclips/explore'}
          >
            {t('common.navigation.explore')}
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            tabIndex={!open ? -1 : 0}
            to={'/paperclips/profile'}
          >
            {t('common.navigation.profile')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
