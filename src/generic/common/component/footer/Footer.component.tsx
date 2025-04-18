import { version } from '@/package.json';
import styles from '@/src/generic/common/component/footer/Footer.module.scss';

export const FooterComponent = () => {
  return (
    <footer
      className={styles.footer}
      role="contentinfo"
    >
      &copy; {version}
    </footer>
  );
};
