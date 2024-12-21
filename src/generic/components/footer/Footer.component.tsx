import { version } from '../../../../package.json';
import styles from './Footer.module.scss';

export const FooterComponent = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.version}>v{version}</div>
    </footer>
  );
};
