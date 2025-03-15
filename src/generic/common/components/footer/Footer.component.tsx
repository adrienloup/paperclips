import { version } from '@/package.json';
import { useTranslation } from 'react-i18next';
import styles from '@/src/generic/common/components/footer/Footer.module.scss';

export const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <footer
      className={styles.footer}
      role="contentinfo"
    >
      Footer {t('common.copy', { version: version })}
    </footer>
  );
};
